Feature: Book a taxi

  I want to book a taxi ride

  Scenario: Book a taxi
    Given I open the app
    And provide a destination
    When I book a ride
    Then I see my booking confirmation



