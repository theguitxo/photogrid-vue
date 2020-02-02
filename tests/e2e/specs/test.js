// https://docs.cypress.io/api/introduction/api.html

function checkImageList(expected) {
  cy.get('div[class="photo-frame--loading"]').then(($images) => {
    expect($images.length).to.equal(expected);
  });
}

describe('PhotoAlbum', () => {
  it('When shows photo album, must contain 5000 images (showing them or prepared to show)', () => {
    cy.visit('/');
    
    cy.get('#photoAlbum').then(() => {
      checkImageList(5000);
    });
  });

  it('When click over an image, it disappears', () => {
    cy.visit('/');

    cy.get('#photo_2').click().then(() => {
      cy.wait(1000);
      checkImageList(4999);
    });
  });
});
