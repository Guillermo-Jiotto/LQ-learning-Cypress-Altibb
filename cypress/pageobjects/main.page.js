export class MainPage {

    discoverMedicalDropdown = () => cy.get('[src*="dropdown-arrow.svg"]')
    medicalVideosLink = () => cy.get('[src*="/main-menu/video.svg"]')
    videoTitle = () => cy.get('[class="video-body w-100"] [class="id-33-1 d-block"][href*="560"]')
    
    appointmentBtn = () => cy.get('[class="ask-doctor-new-button "]')
    findDoctorHeader = () => cy.get('[class="main-search-header"]')

    freeQuestionContainer = () => cy.get('[class="free-question-container"]')
    freeQuestionsHeader = () => cy.get('header[class="title-container"]')

    showAllQuestionsBtn = () => cy.get('[class="show-all-questions-button"]')
    enterQuestionBtn = () => cy.get('[class="ask-question-cta"]') // for AllQuestion assert
    allQuestionsTitle = () => cy.get('[class="page-title"]')

    medicalNewsHeader = () => cy.get('[class="primary-article-title"]') // should('have.text', FROM_THIS_SELECTOR)
    dateUnderNews = () => cy.get('[class="article-primary-container"] [class*="date-added"]') // .first() should('be.visible')

    lastMedicalVideoHeader = () => cy.get('[class="right-side-video-header-v2"] h3') // should('have.text', FROM_THIS_SELECTOR)
    videoImage = () => cy.get('[class="video-image-container"]') // should('be.visible')

    medicalArticles = () => cy.get('[class*="handled"][alt="article"]')
    articleSarayreh = () => cy.get('[class="article-title"]').eq(1) // second selector

    medicalNews = () => cy.get('[alt="news"][src*="news.svg"]')
    happinesNewsArticle = () => cy.get('[class="news-article-title"]').first()
    articleBjcb = () => cy.get('[class="article-title"]').first()
    
    findDoctorHeaderText = 'ابحث عن طبيب واحجز موعد بكل سهولة'
    freeQuestionsHeaderText = 'أسئلة وإجابات مجانية مقترحة'
    medicalNewsHeaderText = 'أخبار ومقالات طبية'
    lastMedicalVideoHeaderText = 'أحدث الفيديوهات الطبية'
    allQuestionsTitleText = 'أسئلة واجابات طبية الامراض المعدية'

    goToSecondVideo = () => {
        this.discoverMedicalDropdown().click()
        this.medicalVideosLink().click()
        this.videoTitle().click({force: true})
    }

    verifyFindDoctorPage = () => {
        this.appointmentBtn().click({force: true})
        this.findDoctorHeader().then((el)=> {
            assert.include(el.text(), this.findDoctorHeaderText);
          });
    }

    assertFreeQuestionSection = () => {
        this.freeQuestionContainer().should('be.visible')
        this.freeQuestionsHeader().then((el)=> {
            assert.include(el.text(), this.freeQuestionsHeaderText);
          });
    }

    assertViewAllQuestionsPage = () => {
        this.showAllQuestionsBtn().scrollIntoView()
        this.showAllQuestionsBtn().click({force: true})
        this.enterQuestionBtn().should('be.visible')
        this.allQuestionsTitle().should('have.text', this.allQuestionsTitleText)
    }

    assertNewsSection = () => {
        this.medicalNewsHeader().scrollIntoView()
        this.medicalNewsHeader().should('have.text', this.medicalNewsHeaderText)
        this.dateUnderNews().should('be.visible')
    }

    assertLatestVideo = () => {
        this.lastMedicalVideoHeader().scrollIntoView()
        this.lastMedicalVideoHeader().should('have.text', this.lastMedicalVideoHeaderText)
        this.videoImage().should('be.visible')
    }

    goToMedicalArticleSarayreh = () => {
        this.discoverMedicalDropdown().click()
        this.medicalArticles().click()
        this.articleSarayreh().click({force: true})
    }

    goToHappinessNews = () => {
        this.discoverMedicalDropdown().click()
        this.medicalNews().click()
        this.happinesNewsArticle().click({force: true})
    }

    goToMedicalArticleBjcb = () => {
        this.discoverMedicalDropdown().click()
        this.medicalArticles().click()
        this.articleBjcb().click({force: true})
    }
}