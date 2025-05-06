
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    clientType: "individual",
    firstName: "",
    lastName: "",
    middleName: "",
    phone: "",
    email: "",
    serviceType: "",
    amount: "",
    term: "",
    city: "",
    passport: "",
    birthDate: "",
    income: "",
    additionalInfo: "",
    companyName: "",
    inn: "",
    position: "",
    businessType: "",
    foundationYear: "",
    employeesNumber: "",
    contactPerson: "",
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleClientTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, clientType: value }));
  };

  const validateForm = () => {
    const isIndividual = formData.clientType === "individual";
    
    // Обязательные поля для физ. лиц
    if (isIndividual) {
      if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || 
          !formData.serviceType || !formData.acceptTerms) {
        return false;
      }
    } 
    // Обязательные поля для юр. лиц
    else {
      if (!formData.companyName || !formData.inn || !formData.phone || !formData.email || 
          !formData.serviceType || !formData.acceptTerms) {
        return false;
      }
    }
    
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Имитация отправки данных на сервер
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Заявка отправлена",
        description: "Наш специалист свяжется с вами в ближайшее время",
        variant: "default"
      });
      // Сброс формы после успешной отправки
      setFormData({
        clientType: "individual",
        firstName: "",
        lastName: "",
        middleName: "",
        phone: "",
        email: "",
        serviceType: "",
        amount: "",
        term: "",
        city: "",
        passport: "",
        birthDate: "",
        income: "",
        additionalInfo: "",
        companyName: "",
        inn: "",
        position: "",
        businessType: "",
        foundationYear: "",
        employeesNumber: "",
        contactPerson: "",
        acceptTerms: false
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Подать заявку</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Заполните форму, и наш специалист свяжется с вами для уточнения деталей и оформления услуги
              </p>
            </div>
            
            <Card className="border-triumph-yellow/20 shadow-lg">
              <CardHeader>
                <CardTitle>Форма заявки</CardTitle>
                <CardDescription>Заполните информацию о себе и интересующей услуге</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <Label className="text-base font-medium mb-2 block">Тип клиента</Label>
                    <Tabs
                      defaultValue="individual"
                      value={formData.clientType}
                      onValueChange={handleClientTypeChange}
                      className="w-full"
                    >
                      <TabsList className="grid grid-cols-2 w-full">
                        <TabsTrigger value="individual">Физическое лицо</TabsTrigger>
                        <TabsTrigger value="business">Юридическое лицо</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="individual" className="pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Фамилия *</Label>
                            <Input 
                              id="lastName" 
                              name="lastName" 
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Иванов"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="firstName">Имя *</Label>
                            <Input 
                              id="firstName" 
                              name="firstName" 
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="Иван"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="middleName">Отчество</Label>
                            <Input 
                              id="middleName" 
                              name="middleName" 
                              value={formData.middleName}
                              onChange={handleChange}
                              placeholder="Иванович"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="birthDate">Дата рождения</Label>
                            <Input 
                              id="birthDate" 
                              name="birthDate" 
                              type="date"
                              value={formData.birthDate}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="passport">Серия и номер паспорта</Label>
                            <Input 
                              id="passport" 
                              name="passport" 
                              value={formData.passport}
                              onChange={handleChange}
                              placeholder="0000 000000"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="income">Ежемесячный доход</Label>
                            <Input 
                              id="income" 
                              name="income" 
                              type="number"
                              value={formData.income}
                              onChange={handleChange}
                              placeholder="50 000"
                            />
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="business" className="pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="space-y-2">
                            <Label htmlFor="companyName">Название организации *</Label>
                            <Input 
                              id="companyName" 
                              name="companyName" 
                              value={formData.companyName}
                              onChange={handleChange}
                              placeholder="ООО «Компания»"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="inn">ИНН *</Label>
                            <Input 
                              id="inn" 
                              name="inn" 
                              value={formData.inn}
                              onChange={handleChange}
                              placeholder="1234567890"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="businessType">Вид деятельности</Label>
                            <Input 
                              id="businessType" 
                              name="businessType" 
                              value={formData.businessType}
                              onChange={handleChange}
                              placeholder="Розничная торговля"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="foundationYear">Год основания</Label>
                            <Input 
                              id="foundationYear" 
                              name="foundationYear" 
                              value={formData.foundationYear}
                              onChange={handleChange}
                              placeholder="2020"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="employeesNumber">Количество сотрудников</Label>
                            <Select 
                              onValueChange={(value) => handleSelectChange("employeesNumber", value)}
                              value={formData.employeesNumber}
                            >
                              <SelectTrigger id="employeesNumber">
                                <SelectValue placeholder="Выберите" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-10">1-10</SelectItem>
                                <SelectItem value="11-50">11-50</SelectItem>
                                <SelectItem value="51-200">51-200</SelectItem>
                                <SelectItem value="201-500">201-500</SelectItem>
                                <SelectItem value="500+">Более 500</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contactPerson">Контактное лицо</Label>
                            <Input 
                              id="contactPerson" 
                              name="contactPerson" 
                              value={formData.contactPerson}
                              onChange={handleChange}
                              placeholder="Иванов Иван Иванович"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="position">Должность</Label>
                            <Input 
                              id="position" 
                              name="position" 
                              value={formData.position}
                              onChange={handleChange}
                              placeholder="Генеральный директор"
                            />
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">Контактная информация</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+7 (___) ___-__-__"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="example@mail.ru"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Город</Label>
                        <Input 
                          id="city" 
                          name="city" 
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Москва"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">Информация о запросе</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <Label htmlFor="serviceType">Интересующая услуга *</Label>
                        <Select 
                          required
                          onValueChange={(value) => handleSelectChange("serviceType", value)}
                          value={formData.serviceType}
                        >
                          <SelectTrigger id="serviceType">
                            <SelectValue placeholder="Выберите услугу" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="credit">Кредитование</SelectItem>
                            <SelectItem value="investments">Вклады и инвестиции</SelectItem>
                            <SelectItem value="accounts">Расчетные счета</SelectItem>
                            <SelectItem value="mortgage">Ипотека</SelectItem>
                            <SelectItem value="other">Другое</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="amount">Сумма</Label>
                        <Input 
                          id="amount" 
                          name="amount" 
                          type="text"
                          value={formData.amount}
                          onChange={handleChange}
                          placeholder="1 000 000 ₽"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="term">Срок</Label>
                        <Select 
                          onValueChange={(value) => handleSelectChange("term", value)}
                          value={formData.term}
                        >
                          <SelectTrigger id="term">
                            <SelectValue placeholder="Выберите срок" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="up-to-1">До 1 года</SelectItem>
                            <SelectItem value="1-3">1-3 года</SelectItem>
                            <SelectItem value="3-5">3-5 лет</SelectItem>
                            <SelectItem value="5-10">5-10 лет</SelectItem>
                            <SelectItem value="10+">Более 10 лет</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Дополнительная информация</Label>
                      <Textarea 
                        id="additionalInfo" 
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        placeholder="Укажите любую дополнительную информацию, которая может быть полезна"
                        rows={4}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="acceptTerms" 
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange("acceptTerms", checked as boolean)
                        }
                        required
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="acceptTerms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Я согласен с условиями обработки персональных данных *
                        </label>
                        <p className="text-xs text-muted-foreground">
                          Нажимая кнопку «Отправить заявку», я даю свое согласие на обработку моих персональных данных в соответствии с{" "}
                          <Link to="#" className="text-triumph-black font-medium hover:text-triumph-yellow">
                            политикой конфиденциальности
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-triumph-yellow text-triumph-black hover:bg-triumph-darkYellow"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        Отправить заявку
                        <Icon name="Send" className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationForm;
