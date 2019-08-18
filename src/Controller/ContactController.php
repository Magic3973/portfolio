<?php

namespace App\Controller;
use App\Entity\Contact;
use App\Repository\ContactRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="contact")
     */
    public function index(ContactRepository $repository)

    {
        $repository = $this->getDoctrine()->getRepository(Contact::class);
        $contacts = $repository->findAll();

        return $this->render('contact/index.html.twig', 
        ['contacts' => $contacts]);
    }

     /**
     * @Route("/contact/create", name="contact_create", condition="request.isXmlHttpRequest()")
     */
    public function create(Request $request)
    {
        $contact = new Contact();
        
        $form = $this->createForm(ContactType::class, $contact, array(
            'action' => $this->generateUrl($request->get('_route'))
        ))
        ->handleRequest($request);
 
        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->persist($contact);
            $this->getDoctrine()->getManager()->flush();
            return new Response('success');
        }
        
        return $this->render('contact/_create.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
