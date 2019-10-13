<?php

namespace App\Controller;
use App\Entity\Contact;
use App\Form\ContactFormType;
use App\Repository\ContactRepository;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
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
        
        $form = $this->createForm(ContactFormType::class, $contact, array(
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
    /**
     * @Route("/contact/new", name="contact_add")
     */
public function add(Request $request, ObjectManager $manager, \Swift_Mailer $mailer)
{
    $contact = new Contact();

    $form = $this->createForm(ContactFormType::class, $contact);

    $form->handleRequest( $request );

    if( $form->isSubmitted() && $form->isValid()){
    $manager->persist($contact);
    $manager->flush();
    //Envoi un mail
    $message = (new \Swift_Message("Ajout d'un nouveau contact"))
    ->setFrom("no-reply@test.fr")
    ->setTo("youou@you.com")
    ->setBody(
        $this->renderView('email/info.html.twig'
    ), 'test/html'
);

$mailer->send($message);

    return $this->redirectToRoute('contact');           
}


return $this->render('contact.html.twig', [
    
    'form' => $form->createView()
]
);
}

}
