export class VideoPage {

    facebookShareURL = 'https://www.facebook.com/sharer.php'
    twitterShareURL = 'https://twitter.com/intent/tweet?url=https://automation.altibb.com'
    linkedinShareURL = 'https://www.linkedin.com/signup/cold-join'
    instagramShareURL = 'https://www.instagram.com/'
    whatsappShareURL = 'https://api.whatsapp.com/'

    shareBtn = () => cy.get('[class="title-section"] [class*="share-icon"][alt="Share"]')
    facebookShareLink = () => cy.get('[href*="https://www.facebook.com/"]').first()
    twitterShareLink = () => cy.get('[href*="https://twitter.com/"]').first()
    linkedinShareLink = () => cy.get('[href*="https://www.linkedin.com/"]').first()
    instagramShareLink = () => cy.get('[href*="https://www.instagram.com/"]').first()
    whatsappBtn = () => cy.get('[class="title-section"] [href*="https://api.whatsapp.com/"]')

    wahtsappHeader = () => cy.get('[id="main_block"] h2')
    whatsappGoToChatBtn = () => cy.get('[href*="automation.altibb.com"][id="action-button"]')

    assertFacebookShare = () => {
        this.shareBtn().click({force: true})
        this.facebookShareLink().invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', this.facebookShareURL)
    }

    assertTwitterShare = () => {
        this.shareBtn().click({force: true})
        this.twitterShareLink().invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', this.twitterShareURL)
    }

    assertLinkedInShare = () => {
        this.shareBtn().click({force: true})
        this.linkedinShareLink().invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', this.linkedinShareURL)
    }

    assertInstagramShare = () => {
        this.shareBtn().click({force: true})
        this.instagramShareLink().invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', this.instagramShareURL)
    }

    assertWhatsappShare = () => {
        this.whatsappBtn().invoke('attr', 'href').should('include', this.whatsappShareURL)
        this.whatsappBtn().invoke('attr', 'href').then(href => {
            cy.request(href).its('status').should('eq', 200);    
        })
    }
}