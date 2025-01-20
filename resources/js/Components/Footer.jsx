import React from 'react'
import { Link } from '@inertiajs/react';

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div>
      <>
      <footer class="bg-gray-900 text-white py-8">
  <div class="container mx-auto">
    <div class="flex flex-col lg:flex-row lg:justify-between gap-8">
      <div class="flex-1 lg:w-1/4">
        <h2 class="text-lg font-bold mb-4">Lingkar Pena Pelajar</h2>
        <p class="text-sm text-gray-400">
          Lingkar Pena Pelajar adalah komunitas yang bergerak dalam literasi dan pendidikan, bertujuan untuk membangun generasi muda yang berwawasan luas dan berakhlak mulia.
        </p>
        <Link href={route('login')} className="btn btn-success" type="btn" style={{marginLeft:"3px", backgroundColor:"#07e107"}}>Login Anggota</Link>
        <p class="mt-4 text-gray-400">&copy; <span id="currentYear"></span> All Rights Reserved.</p>
      </div>
      <div class="flex-1 lg:w-1/4">
        <h2 class="text-lg font-bold mb-4">Navigasi</h2>
        <ul class="space-y-2">
          <li><a href="/" class="hover:text-gray-300">Beranda</a></li>
          <li><a href="/about" class="hover:text-gray-300">Tentang Kami</a></li>
          <li><a href="/services" class="hover:text-gray-300">Layanan</a></li>
          <li><a href="/contact" class="hover:text-gray-300">Kontak</a></li>
        </ul>
      </div>
      <div class="flex-1 lg:w-1/4">
        <h2 class="text-lg font-bold mb-4">Kontak Kami</h2>
        <ul class="space-y-2 text-sm text-gray-400">
          <li>
            <i class="fas fa-map-marker-alt"></i> 
            Alamat: Jl. Mawar No.123, Banyuwangi, Jawa Timur
          </li>
          <li>
            <i class="fas fa-phone"></i> 
            Telepon: <a href="tel:+628123456789" class="hover:text-gray-300">+62 812-3456-789</a>
          </li>
          <li>
            <i class="fas fa-envelope"></i> 
            Email: <a href="email:info@lingkarpenapelajar.com" class="hover:text-gray-300">@gmail.com</a>
          </li>
        </ul>
      </div>
      <div class="flex-1 lg:w-1/4">
        <h2 class="text-lg font-bold mb-4">Ikuti Kami</h2>
        <div class="flex space-x-4">
          <a href="https://facebook.com" target="_blank" class="hover:text-gray-300">
            <i class="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://twitter.com" target="_blank" class="hover:text-gray-300">
            <i class="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://instagram.com" target="_blank" class="hover:text-gray-300">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://youtube.com" target="_blank" class="hover:text-gray-300">
            <i class="fab fa-youtube fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-700 mt-10 pt-6">
      <div class="text-center text-sm text-gray-500">
        Dibuat dengan ❤️ oleh Tim Lingkar Pena Pelajar.
      </div>
    </div>
  </div>
</footer>
      </>
    </div>
  )
}

export default Footer
