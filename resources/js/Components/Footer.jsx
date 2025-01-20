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
          <li><Link href={route('welcome')} class="hover:text-gray-300">Beranda</Link></li>
          <li><Link href={route('about')} class="hover:text-gray-300">Tentang Kami</Link></li>
          <li><Link href={route('visi-misi')} class="hover:text-gray-300">Visi & Misi</Link></li>
          <li><Link href={route('struktur-organisasi')} class="hover:text-gray-300">Struktur Organisasi</Link></li>
          <li><Link href={route('contact')} class="hover:text-gray-300">Kontak</Link></li>
        </ul>
      </div>
      <div class="flex-1 lg:w-1/4">
        <h2 class="text-lg font-bold mb-4">Kontak Kami</h2>
        <ul class="space-y-2 text-sm text-gray-400">
          <li>
            <i class="fas fa-map-marker-alt"></i> 
            Alamat: JL. Jember No.Ruko, Karangharjo, Kecamatan Glenmore, Kabupaten Banyuwangi
          </li>
          <li>
    <i class="fas fa-phone"></i>
    Telepon: <a href="tel:+6285749731625" class="hover:text-gray-300">+62 857-4973-1625</a>
</li>
<li>
    <i class="fas fa-envelope"></i>
    Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fajarrosyidi80@gmail.com" class="hover:text-gray-300">fajarrosyidi80@gmail.com</a>
</li>

        </ul>
      </div>
      <div class="flex-1 lg:w-1/4">
        <h2 class="text-lg font-bold mb-4">Ikuti Kami</h2>
        <div class="flex space-x-4">
          <a href="https://instagram.com/pelajarnu_glenmore" target="_blank" class="hover:text-gray-300">
            <i class="fab fa-instagram fa-lg"></i>
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
