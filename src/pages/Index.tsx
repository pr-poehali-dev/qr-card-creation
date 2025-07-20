import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/eliseymoisey', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Главная визитка */}
        <Card className="bg-white shadow-2xl border-0 overflow-hidden animate-fade-in">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Левая часть - фото и основная информация */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg ring-4 ring-gray-100">
                  <img 
                    src="https://cdn.poehali.dev/files/1f7ba0fa-4249-4ce2-82f6-b3b7f3ad23eb.jpeg" 
                    alt="Алина"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2 font-montserrat">
                  Алина
                </h1>
                <p className="text-lg text-gray-600 font-open-sans">
                  22 года • 167/46кг
                </p>
              </div>

              {/* Краткое описание */}
              <div className="space-y-4 text-center">
                <p className="text-gray-700 font-open-sans leading-relaxed">
                  Привет! Я веселая энергичная девчонка, которая устала сидеть на сайтах 
                  и решила попытать удачу QR-кодами 😊
                </p>
              </div>
            </div>

            {/* Правая часть - навыки и QR код */}
            <div className="bg-gray-900 text-white p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-6 font-montserrat">
                Коротко обо мне:
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" size={20} className="text-gray-300" />
                  <span className="font-open-sans">Легко поддержу разговор</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Wine" size={20} className="text-gray-300" />
                  <span className="font-open-sans">Разбираюсь в вине</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Dumbbell" size={20} className="text-gray-300" />
                  <span className="font-open-sans">Хожу в зал</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Car" size={20} className="text-gray-300" />
                  <span className="font-open-sans">Вожу машинку</span>
                </div>
              </div>

              {/* Контакт */}
              <div className="text-center">
                <Button 
                  onClick={handleTelegramClick}
                  className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
                <p className="text-gray-400 text-sm mt-3 font-open-sans">
                  @eliseymoisey
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Фотогалерея */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 font-montserrat">
            Мои фотографии 📸
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Фото 1 - на природе */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <img 
                src="https://cdn.poehali.dev/files/dfb651d3-a3e3-4a34-b3ce-e1f759626bd3.jpeg" 
                alt="На природе"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold font-open-sans">Прогулка в парке</p>
                  <p className="text-sm opacity-90 font-open-sans">Люблю природу и свежий воздух</p>
                </div>
              </div>
            </div>

            {/* Фото 2 - в ресторане */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <img 
                src="https://cdn.poehali.dev/files/8e203fc0-e37c-4f03-8134-d0f5cef705bd.jpeg" 
                alt="В ресторане"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold font-open-sans">Вечер в ресторане</p>
                  <p className="text-sm opacity-90 font-open-sans">Ценю хорошую атмосферу</p>
                </div>
              </div>
            </div>

            {/* Фото 3 - вечернее */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <img 
                src="https://cdn.poehali.dev/files/b61af0fa-1d9c-4113-8730-21b798c5dc8c.jpeg" 
                alt="Вечерний образ"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold font-open-sans">Вечерний образ</p>
                  <p className="text-sm opacity-90 font-open-sans">Готова к особым событиям</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 font-open-sans">
            Буду рада знакомству! 💫
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;