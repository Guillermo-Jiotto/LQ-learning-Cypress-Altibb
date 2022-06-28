export class ArticlePage {

    questionsAndAnswersHeader = () => cy.get('[class="title-container"]') // for should('have.text')
    questionsSection = () => cy.get('[class="question-wrapper"]') // should('be.visible')
    questionBody = () => cy.get('[class*="question-body"]').first() // should be visible
    showAllQuestionsBtn = () => cy.get('[class="show-all-questions-button"]')
    allQuestionsTitle = () => cy.get('[class="page-title"]')
    latestVideoHeader = () => cy.get('h3[class="primary"]')
    videoData = () => cy.get('[data-src*="https://img.youtube.com/"]').first() // should be visible
    videoTitleLink = () => cy.get('a[class="content"]').first() // should be visible

    questionsAndAnswersHeaderText = 'أسئلة وإجابات مجانية مقترحة'
    allQuestionsTitleText = 'أسئلة واجابات طبية أمراض باطنية'
    latestVideoHeaderText = 'أحدث الفيديوهات الطبية'

    assertSarayrehFreeQuestionsHeader = () => {
        this.questionsAndAnswersHeader().then((el)=> {
            assert.include(el.text(), this.questionsAndAnswersHeaderText);
          });
    }

    assertQuestionsSection = () => {
        this.questionsSection().should('be.visible')
        this.questionBody().should('be.visible')
    }

    assertViewAllQuestions = () => {
        this.showAllQuestionsBtn().click({force: true})
        this.allQuestionsTitle().should('have.text', this.allQuestionsTitleText)
    }

    assertLatestVideoSection = () => {
        this.latestVideoHeader().should('have.text', this.latestVideoHeaderText)
        this.videoData().should('be.visible')
        this.videoTitleLink().should('be.visible')
    }
}