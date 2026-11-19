export class checkoutPage {
constructor(page) {
    this.page = page;
    this.botaoCheckout = page.getByTestId('checkout');
    this.nome = page.getByTestId('firstName');
    this.sobrenome = page.getByTestId('lastName');
    this.cep = page.getByTestId('postalCode');
    this.botaoContinuar = page.getByTestId('continue');
    this.botaoFinalizar = page.getByTestId('finish');
    this.mensagemFinal = page.getByTestId('complete-header');
}








}