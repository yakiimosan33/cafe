'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Instagram, Facebook, Menu as MenuIcon, X, MapPin, Clock, Phone, Send } from 'lucide-react';

export default function CafePage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = {
    coffee: [
      { name: '自家焙煎ブレンド', price: '¥550', desc: 'コクと酸味のバランスが取れた、当店の定番ブレンドです。' },
      { name: 'カフェ・ラテ', price: '¥600', desc: '濃厚なエスプレッソと、きめ細やかなスチームドミルク。' },
      { name: '季節の和紅茶', price: '¥650', desc: '渋みが少なく、ほのかな甘みを感じる国産の紅茶です。' },
    ],
    food: [
      { name: '自家製厚切りトースト', price: '¥450', desc: '外はカリッと、中はモチモチ。発酵バターを添えて。' },
      { name: '抹茶のガトーショコラ', price: '¥700', desc: '宇治抹茶を贅沢に使用した、しっとり濃厚な味わい。' },
      { name: '季節のキッシュプレート', price: '¥1,200', desc: '旬の野菜をたっぷり使った、食べ応えのある一皿。' },
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#D7CCC8]/20">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-[0.2em] text-[#3E2723]">木漏れ日カフェ</div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 text-sm font-medium tracking-widest">
            <a href="#home" className="hover:text-[#5D4037] transition-colors">ホーム</a>
            <a href="#menu" className="hover:text-[#5D4037] transition-colors">メニュー</a>
            <a href="#access" className="hover:text-[#5D4037] transition-colors">アクセス</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-[#3E2723]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-[#D7CCC8]/20 px-6 py-8 space-y-6"
          >
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">ホーム</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">メニュー</a>
            <a href="#access" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">アクセス</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/cafe-interior/1920/1080" 
            alt="Cafe Interior" 
            fill 
            className="object-cover brightness-75"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-[0.3em] leading-tight drop-shadow-lg"
          >
            日常を忘れる、<br className="md:hidden" />穏やかな時間。
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-12 font-light tracking-widest leading-relaxed drop-shadow-md"
          >
            厳選された豆で淹れる一杯と、季節を感じる手作りスイーツ。<br />
            木のぬくもりに包まれた空間で、心ゆくまでおくつろぎください。
          </motion.p>
          <motion.a 
            href="#menu"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-block bg-[#5D4037] text-white px-12 py-4 rounded-full text-sm font-bold tracking-[0.2em] hover:bg-[#3E2723] transition-all duration-300 shadow-xl"
          >
            MENUを見る
          </motion.a>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.41,75.27,123.39,63.74,186.3,56.44Z" fill="#FDFBF7"></path>
          </svg>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6 bg-[#FDFBF7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-[0.3em] text-[#3E2723] mb-6">お品書き</h2>
            <div className="w-16 h-1 bg-[#5D4037] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-20 mb-24">
            {/* Coffee & Tea */}
            <div>
              <h3 className="text-xl font-bold mb-10 flex items-center text-[#3E2723]">
                <span className="w-10 h-px bg-[#5D4037] mr-4"></span>
                Coffee & Tea
              </h3>
              <div className="space-y-10">
                {menuItems.coffee.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-bold text-lg group-hover:text-[#5D4037] transition-colors">{item.name}</span>
                      <span className="text-sm font-medium">{item.price}</span>
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Food & Dessert */}
            <div>
              <h3 className="text-xl font-bold mb-10 flex items-center text-[#3E2723]">
                <span className="w-10 h-px bg-[#5D4037] mr-4"></span>
                Food & Dessert
              </h3>
              <div className="space-y-10">
                {menuItems.food.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-bold text-lg group-hover:text-[#5D4037] transition-colors">{item.name}</span>
                      <span className="text-sm font-medium">{item.price}</span>
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { seed: 'coffee-cup', alt: 'Coffee' },
              { seed: 'cake-slice', alt: 'Cake' },
              { seed: 'latte-art', alt: 'Latte Art' },
              { seed: 'toast-bread', alt: 'Toast' }
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-sm"
              >
                <Image 
                  src={`https://picsum.photos/seed/${img.seed}/600/600`} 
                  alt={img.alt} 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Access & Contact Section */}
      <section id="access" className="py-24 px-6 bg-[#F5F5DC]/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            {/* Access Info */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-[0.3em] text-[#3E2723] mb-12">アクセス</h2>
              <div className="space-y-10 text-[#3E2723]">
                <div>
                  <p className="font-bold mb-3 flex items-center"><MapPin size={18} className="mr-2" /> 住所</p>
                  <p className="text-stone-600 leading-relaxed">
                    〒123-4567<br />
                    東京都〇〇区△△町 1-2-3 木漏れ日ビル1F
                  </p>
                </div>
                <div>
                  <p className="font-bold mb-3 flex items-center"><Clock size={18} className="mr-2" /> 営業時間</p>
                  <p className="text-stone-600 leading-relaxed">
                    10:00 - 19:00 (L.O. 18:30)<br />
                    定休日：月曜日・火曜日
                  </p>
                </div>
                <div>
                  <p className="font-bold mb-3 flex items-center"><Phone size={18} className="mr-2" /> 電話番号</p>
                  <p className="text-stone-600">03-1234-5678</p>
                </div>
                
                {/* Map Placeholder */}
                <div className="w-full h-72 bg-[#D7CCC8]/30 rounded-2xl overflow-hidden relative flex items-center justify-center border border-[#D7CCC8]/50">
                  <div className="text-center text-[#5D4037]/50">
                    <MapPin size={48} className="mx-auto mb-4 opacity-30" />
                    <p className="font-medium">Google Map Placeholder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-1/2 bg-white p-10 md:p-14 rounded-[2rem] shadow-xl shadow-stone-200/50">
              <h3 className="text-2xl font-bold mb-10 text-center text-[#3E2723] tracking-widest">お問い合わせ</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold mb-3 text-[#3E2723]">お名前</label>
                  <input 
                    type="text" 
                    className="w-full bg-stone-50 border-stone-200 rounded-xl focus:ring-2 focus:ring-[#5D4037] focus:border-transparent p-4 transition-all"
                    placeholder="田中 太郎"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-3 text-[#3E2723]">メールアドレス</label>
                  <input 
                    type="email" 
                    className="w-full bg-stone-50 border-stone-200 rounded-xl focus:ring-2 focus:ring-[#5D4037] focus:border-transparent p-4 transition-all"
                    placeholder="example@mail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-3 text-[#3E2723]">ご用件</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-stone-50 border-stone-200 rounded-xl focus:ring-2 focus:ring-[#5D4037] focus:border-transparent p-4 transition-all resize-none"
                    placeholder="ご質問やご予約など"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#5D4037] text-white py-5 rounded-xl font-bold tracking-[0.2em] hover:bg-[#3E2723] transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                >
                  <Send size={18} />
                  送信する
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3E2723] text-[#D7CCC8] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold tracking-[0.3em] mb-8 text-white">木漏れ日カフェ</div>
          <div className="flex justify-center space-x-8 mb-10">
            <a href="#" className="hover:text-white transition-colors p-2 border border-[#D7CCC8]/20 rounded-full">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors p-2 border border-[#D7CCC8]/20 rounded-full">
              <Facebook size={20} />
            </a>
          </div>
          <p className="text-xs opacity-40 tracking-widest">© 2023 Komorebi Cafe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
