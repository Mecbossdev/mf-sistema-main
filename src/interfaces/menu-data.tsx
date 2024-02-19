export const Menu = [
  {
    titleMenu: [
      {title: "Inicio"},
      {title: "Triagem"},
      {title: "Cadastro"},
      {title: "Cumprimento"},
      {title: "Qualidade"},
      {title: "Pagamento"},
      {title: "Configuração"},
      {title: "Ajuda"},
      {title: "Sair"}   
    ],
    pathRoutes: [
      {path: '/inicio',},
      {path: '/inicio',},
      {path: '/'}
    ],
    path: '/inicio',
    subMenu: true,
    subMenuItems: [
      {title: "Rio de Janeiro"},
      {title: "Ceará"},
      {title: "São Paulo"}
    ]
  }
]

export const FakeData = [

  {
    id: 1,
    data: "09/02/2024",
    processo: "222220001444",
    recebida: "e-mail",
    tipoDeJust: "Criminal",
    tipoDeMulta: "Diaria",
    valorDaMulta: "R$ 200,00",
    prazoFatal: "24h"
  },
  {
    id: 2,
    data: "20/02/2024",
    processo: "222220001444",
    recebida: "e-mail",
    tipoDeJust: "Criminal",
    tipoDeMulta: "Diaria",
    valorDaMulta: "R$ 200,00",
    prazoFatal: "24h"
  },
  {
    id: 3,
    data: "15/02/2024",
    processo: "222220001444",
    recebida: "e-mail",
    tipoDeJust: "Trabalhista",
    tipoDeMulta: "Diaria",
    valorDaMulta: "R$ 200,00",
    prazoFatal: "24h"
  },
  {
    id: 4,
    data: "15/02/2024",
    processo: "222220001444",
    recebida: "e-mail",
    tipoDeJust: "Federal",
    tipoDeMulta: "Diaria",
    valorDaMulta: "R$ 200,00",
    prazoFatal: "24h"
  },


]