<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class IntroTwigController extends AbstractController
{
    /**
     * @var Sessioninterface
     */
private $session;

    /**
    *  @var RouterInterface
    */

 private $router;

public function __construct(SessionInterface $session, RouterInterface $router)
{
    $this->session = $session;
    $this->router = $router;
    }

    /**
     * @Route("/", name="index")
     */
    public function index()
    {
        return $this->render('index.html.twig', [
            'posts' => $this->session->get('posts'),
        ]);
    }
    /**
     * @Route("/", name="add")
     */
    public function add()
    {
        $posts = $this->session->get('posts');
        $id = uniqid();
        $posts[$id] = [
            'title' => 'Un titre aléatoire'. rand(1,500),
            'text' => 'Un texte aléatoire' . rand(1,500),
            'id' => $id,
            'date' => new \DateTime(),
            'price' => 56300.25
                            ];

        $this->session->set('posts', $posts);
        return new RedirectResponse( $this->router->generate('blog_index'));
      
    }

     /**
     * @Route("/blog/show/{id}", name="blog_show")
     */
    public function show($id)
    {
        $posts = $this->session->get('posts');
       if( !$posts || !isset($posts[$id]))
       {
       throw new NotFoundHttpException('Post non trouvé');
       }
        return $this->render('blog/post.html.twig', 
    ['id' => $id,
    'post' => $posts[$id]
    ]);
      
     }
}
