Feature: My first
  Something, something, something dark side

  Scenario: Running integration tests against db
    Given the following users exist:
      | name   | email              | twitter         |
      | Aslak  | aslak@cucumber.io  | @aslak_hellesoy |
      | Julien | julien@cucumber.io | @jbpros         |
      | Matt   | matt@cucumber.io   | @mattwynne      |
      | Johan  | johan@cucumber.io  | @JohanObrink    |
    When Do something
    Then I can get a user with the name "Johan" from the database

  Scenario: Running another scenario
    Given The world is sane
    When Do something
    Then Another consequence
