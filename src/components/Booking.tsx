import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react";

const Booking = () => {
  return (
    <section id="agendar" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Agende seu Horário
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reserve seu horário de forma rápida e prática. Nossa equipe entrará 
            em contato para confirmar todos os detalhes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card shadow-elegant border-0">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl text-foreground">
                Formulário de Agendamento
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Personal Info */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground flex items-center space-x-2 mb-2">
                      <User className="h-4 w-4" />
                      <span>Nome Completo</span>
                    </Label>
                    <Input 
                      id="name" 
                      placeholder="Digite seu nome"
                      className="gradient-subtle border-border/50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground flex items-center space-x-2 mb-2">
                      <Phone className="h-4 w-4" />
                      <span>Telefone</span>
                    </Label>
                    <Input 
                      id="phone" 
                      placeholder="(11) 99999-9999"
                      className="gradient-subtle border-border/50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground flex items-center space-x-2 mb-2">
                      <Mail className="h-4 w-4" />
                      <span>E-mail</span>
                    </Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="seu@email.com"
                      className="gradient-subtle border-border/50"
                    />
                  </div>
                </div>

                {/* Booking Details */}
                <div className="space-y-4">
                  <div>
                    <Label className="text-foreground flex items-center space-x-2 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>Serviço Desejado</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="gradient-subtle border-border/50">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cut">Corte & Finalização</SelectItem>
                        <SelectItem value="color">Coloração & Luzes</SelectItem>
                        <SelectItem value="style">Penteados & Styling</SelectItem>
                        <SelectItem value="treatment">Tratamentos</SelectItem>
                        <SelectItem value="multiple">Múltiplos Serviços</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-foreground flex items-center space-x-2 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>Data Preferida</span>
                    </Label>
                    <Input 
                      type="date"
                      className="gradient-subtle border-border/50"
                    />
                  </div>

                  <div>
                    <Label className="text-foreground flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4" />
                      <span>Horário Preferido</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="gradient-subtle border-border/50">
                        <SelectValue placeholder="Selecione um horário" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00</SelectItem>
                        <SelectItem value="10:00">10:00</SelectItem>
                        <SelectItem value="11:00">11:00</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="15:00">15:00</SelectItem>
                        <SelectItem value="16:00">16:00</SelectItem>
                        <SelectItem value="17:00">17:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <Label htmlFor="notes" className="text-foreground flex items-center space-x-2 mb-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Observações (Opcional)</span>
                </Label>
                <Textarea 
                  id="notes"
                  placeholder="Conte-nos sobre suas preferências, inspirações ou qualquer detalhe importante..."
                  className="gradient-subtle border-border/50 min-h-[100px]"
                />
              </div>

              {/* Policies */}
              <div className="bg-muted/30 rounded-lg p-4 text-sm text-muted-foreground">
                <p className="font-medium mb-2">📋 Políticas de Agendamento:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Confirmação necessária com 24h de antecedência</li>
                  <li>• Cancelamentos devem ser feitos com pelo menos 2h de antecedência</li>
                  <li>• Reagendamentos podem ser feitos por WhatsApp ou telefone</li>
                  <li>• Para múltiplos serviços, reserve mais tempo em sua agenda</li>
                </ul>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="elegant" size="lg" className="flex-1">
                  <Calendar className="h-5 w-5 mr-2" />
                  Enviar Agendamento
                </Button>
                <Button variant="soft" size="lg" className="flex-1">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  WhatsApp Direto
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;