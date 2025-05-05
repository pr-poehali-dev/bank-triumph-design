
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-triumph-black relative overflow-hidden py-16 md:py-32">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-triumph-yellow blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-triumph-yellow blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Банк <span className="text-triumph-yellow">Триумф</span> — 
              <br />Ваш путь к финансовой свободе
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Откройте для себя преимущества современного банковского обслуживания. 
              Инновационные решения для бизнеса и частных лиц.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-triumph-yellow text-triumph-black hover:bg-triumph-darkYellow font-semibold"
              >
                Открыть счёт
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-triumph-yellow text-triumph-yellow hover:bg-triumph-yellow/10"
              >
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-triumph-yellow rounded-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Банковская карта" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white text-triumph-black p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Icon name="PiggyBank" size={24} className="text-triumph-yellow mr-2" />
                  <span className="font-bold">До 12% годовых</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-triumph-black p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Icon name="Shield" size={24} className="text-triumph-yellow mr-2" />
                  <span className="font-bold">100% безопасность</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
