
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

// Демо-данные для личного кабинета
const demoUserData = {
  name: "Иван Петров",
  accounts: [
    {
      id: "1",
      type: "Текущий счет",
      number: "40817810123456789012",
      balance: 125350.75,
      currency: "₽"
    },
    {
      id: "2",
      type: "Сберегательный счет",
      number: "42301810987654321098",
      balance: 450000.00,
      currency: "₽"
    },
    {
      id: "3",
      type: "Валютный счет",
      number: "40820840123456789012",
      balance: 2150.50,
      currency: "$"
    }
  ],
  recentTransactions: [
    { id: "1", date: "02.05.2024", description: "Перевод на карту 1234 **** **** 5678", amount: -15000, currency: "₽" },
    { id: "2", date: "01.05.2024", description: "Зачисление зарплаты", amount: 85000, currency: "₽" },
    { id: "3", date: "30.04.2024", description: "Оплата ЖКХ", amount: -5430.82, currency: "₽" },
    { id: "4", date: "29.04.2024", description: "Покупка в магазине 'Продукты'", amount: -3245.50, currency: "₽" },
    { id: "5", date: "28.04.2024", description: "Пополнение счета", amount: 10000, currency: "₽" }
  ]
};

const Dashboard = () => {
  const [user, setUser] = useState(demoUserData);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Имитация загрузки данных с сервера
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('ru-RU', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount) + " " + currency;
  };

  // Расчет общего баланса
  const totalBalance = user.accounts.reduce((acc, account) => {
    // Упрощенно считаем, что доллар = 90 рублей
    if (account.currency === "$") {
      return acc + account.balance * 90;
    }
    return acc + account.balance;
  }, 0);

  const handleLogout = () => {
    // В реальном приложении здесь был бы запрос на выход
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50 py-16 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <Icon name="Loader2" size={48} className="text-triumph-yellow animate-spin mb-4" />
            <p className="text-lg">Загрузка данных...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Здравствуйте, {user.name}!</h1>
              <p className="text-gray-600">Добро пожаловать в личный кабинет банка Триумф</p>
            </div>
            <Button 
              variant="outline"
              className="border-triumph-yellow text-triumph-black hover:bg-triumph-yellow/10"
              onClick={handleLogout}
            >
              <Icon name="LogOut" size={16} className="mr-2" />
              Выйти
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Общий баланс */}
            <Card className="border-triumph-yellow/20 shadow bg-triumph-black text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-triumph-yellow">Общий баланс</CardTitle>
                <CardDescription className="text-gray-400">Суммарно по всем счетам</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">
                  {formatCurrency(totalBalance, "₽")}
                </div>
                <Button 
                  size="sm" 
                  className="bg-triumph-yellow text-triumph-black hover:bg-triumph-darkYellow"
                >
                  <Icon name="PlusCircle" size={16} className="mr-2" />
                  Пополнить
                </Button>
              </CardContent>
            </Card>
            
            {/* Быстрые действия */}
            <Card className="border-triumph-yellow/20 shadow">
              <CardHeader className="pb-2">
                <CardTitle>Быстрые действия</CardTitle>
                <CardDescription>Популярные операции</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="flex-col h-20 text-sm justify-center">
                    <Icon name="Send" size={20} className="mb-1 text-triumph-yellow" />
                    Перевести
                  </Button>
                  <Button variant="outline" className="flex-col h-20 text-sm justify-center">
                    <Icon name="Smartphone" size={20} className="mb-1 text-triumph-yellow" />
                    Оплатить
                  </Button>
                  <Button variant="outline" className="flex-col h-20 text-sm justify-center">
                    <Icon name="FileText" size={20} className="mb-1 text-triumph-yellow" />
                    Выписка
                  </Button>
                  <Button variant="outline" className="flex-col h-20 text-sm justify-center">
                    <Icon name="RefreshCw" size={20} className="mb-1 text-triumph-yellow" />
                    Обмен валют
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Уведомления */}
            <Card className="border-triumph-yellow/20 shadow">
              <CardHeader className="pb-2">
                <CardTitle>Уведомления</CardTitle>
                <CardDescription>Важная информация</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded-md bg-blue-50 flex items-start">
                    <Icon name="BellRing" size={16} className="mr-2 text-blue-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-blue-800">Новое предложение</p>
                      <p className="text-blue-600">Кредит с пониженной ставкой 8.5% годовых</p>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-md bg-green-50 flex items-start">
                    <Icon name="BadgePercent" size={16} className="mr-2 text-green-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-green-800">Кэшбэк</p>
                      <p className="text-green-600">Вам начислено 2500₽ кэшбэка за апрель</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="accounts" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="accounts">Мои счета</TabsTrigger>
              <TabsTrigger value="transactions">История операций</TabsTrigger>
            </TabsList>
            
            <TabsContent value="accounts">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {user.accounts.map((account) => (
                  <Card key={account.id} className="border-triumph-yellow/20 hover:border-triumph-yellow transition-colors shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex justify-between items-center">
                        <span>{account.type}</span>
                        <Icon name={account.currency === "₽" ? "Ruble" : "DollarSign"} size={16} />
                      </CardTitle>
                      <CardDescription className="font-mono">{account.number.replace(/(\d{4})/g, '$1 ').trim()}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-4">
                        {formatCurrency(account.balance, account.currency)}
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="flex-1"
                        >
                          Пополнить
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1 bg-triumph-yellow text-triumph-black hover:bg-triumph-darkYellow"
                        >
                          Перевести
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {/* Карточка для добавления нового счета */}
                <Card className="border-dashed border-triumph-yellow/20 hover:border-triumph-yellow transition-colors bg-triumph-yellow/5 shadow-sm flex flex-col items-center justify-center h-[200px] cursor-pointer">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-triumph-yellow/10 flex items-center justify-center mx-auto mb-3">
                      <Icon name="Plus" size={24} className="text-triumph-yellow" />
                    </div>
                    <h3 className="font-medium mb-1">Открыть новый счет</h3>
                    <p className="text-sm text-gray-500">Выберите тип счета и валюту</p>
                  </div>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="transactions">
              <Card className="border-triumph-yellow/20 shadow">
                <CardHeader>
                  <CardTitle>Последние операции</CardTitle>
                  <CardDescription>История ваших транзакций</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[500px]">
                      <thead>
                        <tr className="border-b">
                          <th className="py-3 px-4 text-left font-medium text-gray-500 text-sm">Дата</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500 text-sm">Описание</th>
                          <th className="py-3 px-4 text-right font-medium text-gray-500 text-sm">Сумма</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user.recentTransactions.map((transaction) => (
                          <tr key={transaction.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-sm">{transaction.date}</td>
                            <td className="py-3 px-4">{transaction.description}</td>
                            <td className={`py-3 px-4 text-right font-medium ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {transaction.amount >= 0 ? '+' : ''}
                              {formatCurrency(transaction.amount, transaction.currency)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="link" className="text-triumph-black hover:text-triumph-yellow">
                      Показать все операции
                      <Icon name="ChevronRight" size={16} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
