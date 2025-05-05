
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-triumph-black text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-triumph-yellow rounded-full p-2">
              <Icon name="Banknote" size={24} className="text-triumph-black" />
            </div>
            <span className="text-2xl font-bold">ТРИУМФ</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-triumph-yellow transition-colors">Главная</a>
            <a href="#services" className="text-white hover:text-triumph-yellow transition-colors">Услуги</a>
            <a href="#advantages" className="text-white hover:text-triumph-yellow transition-colors">Преимущества</a>
            <a href="#" className="text-white hover:text-triumph-yellow transition-colors">О банке</a>
            <a href="#" className="text-white hover:text-triumph-yellow transition-colors">Контакты</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="hidden md:flex border-triumph-yellow text-triumph-yellow hover:bg-triumph-yellow hover:text-triumph-black transition-all"
            >
              <Icon name="User" size={18} className="mr-2" />
              Личный кабинет
            </Button>
            <Button 
              className="bg-triumph-yellow text-triumph-black hover:bg-triumph-darkYellow transition-colors"
            >
              <Icon name="PhoneCall" size={18} className="mr-2" />
              8 800 123-45-67
            </Button>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
