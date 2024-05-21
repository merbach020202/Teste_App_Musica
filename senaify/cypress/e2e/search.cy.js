describe('template spec', () => {

  before(() => {
    cy.visit('/')
  })

  it('Redirecionar a minha tela para a tela de busca', () => {
    cy.get("[href='/Search']").click()

    cy.scrollTo("top")
  });

  it('Procurar por uma música', () => {
    cy.get("[data-testID='campoBusca']").type("Tebey")

    // cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  });

  it('Verificar se existe a música exata', () => {
    cy.get("[aria-label='music-item']").filter(":contains('Blind')").click()
  });

  it('Clicou no botão de curtir', async () => {
    cy.wait(1500)

    cy.get("[aria-label='music-item']").first().then( async (item) => {
      cy.wrap(item).find("[data-testid='icon-button']").click()
    })
  });
})
// let BotaoCurtir = musicaProcurada.find("[data-testid='icon-button']")
// BotaoCurtir.click();