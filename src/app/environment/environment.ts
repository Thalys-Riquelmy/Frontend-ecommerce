export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  endpoints: {
    produtos: '/produtos',           // Endpoint para operações relacionadas a produtos
    categorias: '/categorias',       // Endpoint para operações relacionadas a categorias
    usuarios: '/usuarios',           // Endpoint para operações relacionadas a usuários
    enderecos: '/enderecos',         // Endpoint para operações relacionadas a endereços
    pedidos: '/pedidos',             // Endpoint para operações relacionadas a pedidos
    itemPedidos: '/itemPedidos' ,    // Endpoint para operações relacionadas a itens do pedido
    pagamentos: '/pagamentos',       // Endpoint para operações relacionadas a pagamentos
    itemCarrinhos: '/itemCarrinhos', // Endpoint para operações relacionadas a itens do carrinho
    carrinhos: '/carrinhos'          // Endpoint para operações relacionadas a carrinho
  }
};
