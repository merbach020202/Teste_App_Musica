// Ambiente de Teste

describe('template spec', () => {

  before(() => {
    cy.visit('/')
  })

  // it: Pequenos passos para verificar se uma determinada etapa está correta 
  //(Exemplo: Cadastrar consulta, Verificar se seleção de clínica, médico data e hora estçao ocorrendo como deveria)
  it('Verificar se o header está visível', () => {
    //Capturar o elemento title, e ver se ele está visível
    cy.get("[aria-label='title-head']").should("be.visible")
    cy.get("[aria-label='title-head']").should("contain", 'Good morning')

    // Formato da visualização da tela lá no cypress
    // cy.viewport('iphone-xr')
  });

  it("Verificar se existe itens na listagem da playlist", () =>{
    cy.wait(2000)
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
  });

  it("Clicar no primeiro item da lista, para listr sua músicas", () => {
    cy.get("[aria-label='playlist-item']").first().click()

    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  })

  it("CLicar na música desejada e executar o áudio", () => {
    cy.get("[aria-label='music-item']").contains('Dois Tristes').click()
  })
})