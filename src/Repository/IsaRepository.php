<?php

namespace App\Repository;

use App\Entity\Isa;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Isa|null find($id, $lockMode = null, $lockVersion = null)
 * @method Isa|null findOneBy(array $criteria, array $orderBy = null)
 * @method Isa[]    findAll()
 * @method Isa[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IsaRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Isa::class);
    }

    // /**
    //  * @return Isa[] Returns an array of Isa objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Isa
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
