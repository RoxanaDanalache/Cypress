class HomePage {

    get coursesTab() {
        return cy.get("a[href='/courses']");
    }
      
    accessCourses() {
        this.coursesTab.click();
    }
}
    
export default HomePage;






