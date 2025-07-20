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
                    src="/img/a7a0863b-9974-484e-a91e-ad06edcdcaf3.jpg" 
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

              {/* QR код */}
              <div className="text-center">
                <div className="bg-white p-6 rounded-2xl inline-block mb-4">
                  <div className="w-32 h-32 bg-gray-900 rounded-lg flex items-center justify-center">
                    <div className="text-white text-xs leading-none">
                      ██ ██ ██<br />
                      ██&nbsp;&nbsp;&nbsp;&nbsp;██<br />
                      ██ ██ ██<br />
                      &nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;<br />
                      ██ ██ ██<br />
                      ██&nbsp;&nbsp;&nbsp;&nbsp;██<br />
                      ██ ██ ██
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4 font-open-sans">
                  Сканируй QR-код или нажми кнопку
                </p>
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

        {/* Дополнительная информация */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 font-open-sans">
            Буду рада знакомству! 💫
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;