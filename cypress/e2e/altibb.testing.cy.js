import { ArticlePage } from "../pageobjects/article.page.js"
import { BjcbArticlePage } from "../pageobjects/bjcb.article.page.js"
import { HappinessNewsPage } from "../pageobjects/happiness.news.page.js"
import { MainPage } from "../pageobjects/main.page.js"
import { VideoPage } from "../pageobjects/video.page.js"

describe('Medical video testing', () => {

  const mainPage = new MainPage()
  const videoPage = new VideoPage()
  const articlePage = new ArticlePage()
  const happinessNewsPage = new HappinessNewsPage()
  const bjcbArticlePage = new BjcbArticlePage()

  beforeEach(() => {
    cy.viewport(1680, 1050)
    cy.visit('https://automation.altibb.com/')
  })

  it('Should assert share-redirection on Facebook', () => {
    mainPage.goToSecondVideo()
    videoPage.assertFacebookShare()
  })

  it('Should assert share-redirection on Twitter', () => {
    mainPage.goToSecondVideo()
    videoPage.assertTwitterShare()
  })

  it('Should assert share-redirection on LinkedIn', () => {
    mainPage.goToSecondVideo()
    videoPage.assertLinkedInShare()
  })

  it('Should assert share-redirection on Instagram', () => {
    mainPage.goToSecondVideo()
    videoPage.assertInstagramShare()
  })

  it('Should assert share-redirection on Whatsapp', () => {
    mainPage.goToSecondVideo()
    videoPage.assertWhatsappShare()
  })

  it('Should assert the Find a doctor header', () => {
    mainPage.goToSecondVideo()
    mainPage.verifyFindDoctorPage()
  })

  it('Should assert Free Question section', () => {
    mainPage.goToSecondVideo()
    mainPage.assertFreeQuestionSection()
  })

  it('Should assert View All Questions page', () => {
    mainPage.goToSecondVideo()
    mainPage.assertViewAllQuestionsPage()
  })

  it('Should assert that Medical News is displayed', () => {
    mainPage.goToSecondVideo()
    mainPage.assertNewsSection()
  })

  it('Should assert that Latest Medical Video is displayed', () => {
    mainPage.goToSecondVideo()
    mainPage.assertLatestVideo()
  })

  it('Should assert Free Questions at Sarayreh', () => {
    mainPage.goToMedicalArticleSarayreh()
    articlePage.assertSarayrehFreeQuestionsHeader()
  })

  it('Should assert Question Section at Sarayreh', () => {
    mainPage.goToMedicalArticleSarayreh()
    articlePage.assertQuestionsSection()
  })

  it('Should assert View All Questions Header at Sarayreh', () => {
    mainPage.goToMedicalArticleSarayreh()
    articlePage.assertViewAllQuestions()
  })

  it('Should assert Latest Medical Video Section at Sarayreh', () => {
    mainPage.goToMedicalArticleSarayreh()
    articlePage.assertLatestVideoSection()
  })

  it('Should assert Facebook share at Happiness News', () => {
    mainPage.goToHappinessNews()
    happinessNewsPage.assertFacebookShare()
  })

  it('Should assert Twitter share at Happiness News', () => {
    mainPage.goToHappinessNews()
    happinessNewsPage.assertTwitterShare()
  })

  it('Should assert Linkedin share at Happiness News', () => {
    mainPage.goToHappinessNews()
    happinessNewsPage.assertLinkedInShare()
  })

  it('Should assert Instagram share at Happiness News', () => {
    mainPage.goToHappinessNews()
    happinessNewsPage.assertInstagramShare()
  })

  it('Should assert Whatsapp share at Happiness News', () => {
    mainPage.goToHappinessNews()
    happinessNewsPage.assertWhatsappShare()
  })

  it('Should assert Talk to Doctor page at Happiness News', () => {
    mainPage.goToHappinessNews()
    happinessNewsPage.assertTalkToDoctorHeader()
  })

  it('Should assert Answer Questions page at Happiness News', () => {
    mainPage.goToHappinessNews()
    happinessNewsPage.assertWatchAnswerPage()
  })

  it('Should assert Appointment page at Happiness News', () => {
    mainPage.goToHappinessNews()
    happinessNewsPage.assertAppointmentPage()
  })

  it('Should assert Last Medical Videos at Happiness News', () => {
    mainPage.goToHappinessNews()
    happinessNewsPage.assertLatestMedicalVideosSection()
  })

  it('Should assert Facebook Share at Bjcb article', () => {
    mainPage.goToMedicalArticleBjcb()
    bjcbArticlePage.assertFacebookShare()
  })

  it('Should assert Twitter Share at Bjcb article', () => {
    mainPage.goToMedicalArticleBjcb()
    bjcbArticlePage.assertTwitterShare()
  })

  it('Should assert Linkedin Share at Bjcb article', () => {
    mainPage.goToMedicalArticleBjcb()
    bjcbArticlePage.assertLinkedInShare()
  })

  it('Should assert Instagram Share at Bjcb article', () => {
    mainPage.goToMedicalArticleBjcb()
    bjcbArticlePage.assertInstagramShare()
  })

  it('Should assert Whatsapp Share at Bjcb article', () => {
    mainPage.goToMedicalArticleBjcb()
    bjcbArticlePage.assertWhatsappShare()
  })

  it('Should assert Happy Reaction at Bjcb article', () => {
    mainPage.goToMedicalArticleBjcb()
    bjcbArticlePage.assertHappyReaction()
  })

  it('Should assert Appointment at Bjcb article', () => {
    mainPage.goToMedicalArticleBjcb()
    bjcbArticlePage.assertAppointmentPage()
  })

  it('Should assert Latest Medical Videos at Bjcb article', () => {
    mainPage.goToMedicalArticleBjcb()
    bjcbArticlePage.assertLatestMedicalVideosSection()
  })
})