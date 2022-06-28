export class BjcbArticlePage {

    shareBtn = () => cy.get('[alt="Share"]').first()
    facebookShare = () => cy.get('[href*="https://www.facebook.com/sharer.php"]').first()
    twitterShare = () => cy.get('[href*="https://twitter.com/intent/tweet"]').first()
    linkedinShare = () => cy.get('[href*="https://www.linkedin.com/sharing/"]').first()
    instagramShare = () => cy.get('[href*="https://www.instagram.com/"]').first()
    wahtsappShare = () => cy.get('[class="title-section"] [href*="https://api.whatsapp.com/"]')

    happyReaction = () => cy.get('[class*="happy"]') // should be.visible
    appointmentBtn = () => cy.get('[class="ask-doctor-new-button "]')
    appointmentHeader = () => cy.get('[class="main-search-header"]')

    latestMedicalVideoHeader = () => cy.get('h3[class="primary"]')
    latestVideoImg = () => cy.get('[data-src*="https://img.youtube.com/"]').first() // should be.visible
    latestVideoContainer = () => cy.get('[id="video-container-inner"]') // should be.visible

    appointmentHeaderText = 'ابحث عن طبيب واحجز موعد بكل سهولة' // should include this text
    latestMedicalVideoHeaderText = 'أحدث الفيديوهات الطبية' // should have.text

    facebookShareURL = 'https://www.facebook.com/sharer.php'
    twitterShareURL = 'https://twitter.com/intent/tweet?url=https://automation.altibb.com'
    linkedinShareURL = 'https://www.linkedin.com/signup/cold-join'
    instagramShareURL = 'https://www.instagram.com/'
    whatsappShareURL = 'https://api.whatsapp.com/'

    assertFacebookShare = () => {
        this.shareBtn().click({force: true})
        this.facebookShare().invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', this.facebookShareURL)
    }

    assertTwitterShare = () => {
        this.shareBtn().click({force: true})
        this.twitterShare().invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', this.twitterShareURL)
    }

    assertLinkedInShare = () => {
        this.shareBtn().click({force: true})
        this.linkedinShare().invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', this.linkedinShareURL)
    }

    assertInstagramShare = () => {
        this.shareBtn().click({force: true})
        this.instagramShare().invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', this.instagramShareURL)
    }

    assertWhatsappShare = () => {
        this.wahtsappShare().invoke('attr', 'href').should('include', this.whatsappShareURL)
        this.wahtsappShare().invoke('attr', 'href').then(href => {
            cy.request(href).its('status').should('eq', 200);    
        })
    }

    assertHappyReaction = () => {
        this.happyReaction().should('be.visible')
    }

    assertAppointmentPage = () => {
        this.appointmentBtn().click({force: true})
        this.appointmentHeader().then((el)=> {
            assert.include(el.text(), this.appointmentHeaderText);
          });
    }

    assertLatestMedicalVideosSection = () => {
        this.latestMedicalVideoHeader().should('have.text', this.latestMedicalVideoHeaderText)
        this.latestVideoImg().should('be.visible')
        this.latestVideoContainer().should('be.visible')
    }
}