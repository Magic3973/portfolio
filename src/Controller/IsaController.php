<?php

namespace App\Controller;

use App\Entity\Isa;
use App\Repository\IsaRepository;
use App\Form\IsaType;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class IsaController extends AbstractController

{
    /**
     * @Route("/isa", name="isa")
    */
    public function index(IsaRepository $repository)
{
    $contacts = $repository->findAll();
       
        return $this->render('contact.html.twig', ['contacts'=>$contacts]);
            
    }
}