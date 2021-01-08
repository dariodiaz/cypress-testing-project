Feature: Login to Application

    As a valid user
    I want to log in into Application

    Scenario: Valid login
        Given I open login page
        When I fill username with "username"
        And I fill password with "password"
        And I click on submit login
        Then I should see the homepage