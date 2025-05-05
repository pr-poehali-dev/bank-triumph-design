
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-triumph-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-triumph-yellow rounded-full p-2">
                <Icon name="Banknote" size={24} className="text-triumph-black" />
              </div>
              <span className="text-2xl font-bold">ТРИУМФ</span>
            </div>
            <p className="text-gray-400 mb-4">
              Надежный банк для всех ваших финансовых потребностей. Работаем с 2005 года.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-triumph-yellow transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-triumph-yellow transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-triumph-yellow transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-triumph-yellow transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-triumph-yellow">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Кредитование</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Вклады и инвестиции</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Расчетные счета</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ипотека</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Страхование</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Онлайн-банкинг</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-triumph-yellow">О банке</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Новости</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Карьера</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Отделения банка</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Реквизиты</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Раскрытие информации</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-triumph-yellow">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Icon name="PhoneCall" size={20} className="text-triumph-yellow mr-3 mt-1" />
                <div>
                  <p className="text-white font-medium">8 800 123-45-67</p>
                  <p className="text-gray-400 text-sm">Бесплатно по России</p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon name="Mail" size={20} className="text-triumph-yellow mr-3 mt-1" />
                <div>
                  <p className="text-white">info@triumphbank.ru</p>
                  <p className="text-gray-400 text-sm">Для обращений клиентов</p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon name="MapPin" size={20} className="text-triumph-yellow mr-3 mt-1" />
                <div>
                  <p className="text-white">г. Москва, ул. Банковская, 123</p>
                  <p className="text-gray-400 text-sm">Центральный офис</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-triumph-gray pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Банк «Триумф». Все права защищены. Лицензия ЦБ РФ №1234
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Пользовательское соглашение</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
