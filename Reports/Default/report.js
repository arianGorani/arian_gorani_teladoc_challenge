$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addUser.feature");
formatter.feature({
  "line": 2,
  "name": "Add a user and validate the user has been added to the table",
  "description": "",
  "id": "add-a-user-and-validate-the-user-has-been-added-to-the-table",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "# If you change variable \u003clocal\u003e to \u003csaucelab\u003e the test scenario will run in Sauce Lab instead on local machine,"
    },
    {
      "line": 5,
      "value": "# but you have to provide \u003cDriver Creation\u003e link of your Sauce Lab account"
    }
  ],
  "line": 8,
  "name": "Add a user and validate the user has been added to the table",
  "description": "",
  "id": "add-a-user-and-validate-the-user-has-been-added-to-the-table;add-a-user-and-validate-the-user-has-been-added-to-the-table",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I open application in local \u003cBrowser\u003e Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click Add User Button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I type First name Arian and Last name Gorani",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type User Name arian.gorani and Password arian2022",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I choose as Customer Company AAA",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select role Admin",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I type E-mail arian.gorani@test.com",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type Cell Phone +1999999",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify User has added on table",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "add-a-user-and-validate-the-user-has-been-added-to-the-table;add-a-user-and-validate-the-user-has-been-added-to-the-table;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 22,
      "id": "add-a-user-and-validate-the-user-has-been-added-to-the-table;add-a-user-and-validate-the-user-has-been-added-to-the-table;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 23,
      "id": "add-a-user-and-validate-the-user-has-been-added-to-the-table;add-a-user-and-validate-the-user-has-been-added-to-the-table;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 24,
      "id": "add-a-user-and-validate-the-user-has-been-added-to-the-table;add-a-user-and-validate-the-user-has-been-added-to-the-table;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Add a user and validate the user has been added to the table",
  "description": "",
  "id": "add-a-user-and-validate-the-user-has-been-added-to-the-table;add-a-user-and-validate-the-user-has-been-added-to-the-table;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I open application in local Chrome Browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click Add User Button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I type First name Arian and Last name Gorani",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type User Name arian.gorani and Password arian2022",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I choose as Customer Company AAA",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select role Admin",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I type E-mail arian.gorani@test.com",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type Cell Phone +1999999",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify User has added on table",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "local",
      "offset": 22
    },
    {
      "val": "Chrome",
      "offset": 28
    }
  ],
  "location": "homepageSteps.openApplication(String,String)"
});
formatter.result({
  "duration": 7179371400,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.iClickAddUserButton()"
});
formatter.result({
  "duration": 157064900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arian",
      "offset": 18
    },
    {
      "val": "Gorani",
      "offset": 38
    }
  ],
  "location": "homepageSteps.iTypeFirstNameAndLastName(String,String)"
});
formatter.result({
  "duration": 238506000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arian.gorani",
      "offset": 17
    },
    {
      "val": "arian2022",
      "offset": 43
    }
  ],
  "location": "homepageSteps.iTypeUserNameAndPassword(String,String)"
});
formatter.result({
  "duration": 192050700,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.iChooseAsCustomerCompanyAAA()"
});
formatter.result({
  "duration": 58875400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 14
    }
  ],
  "location": "homepageSteps.iSelectRoleAdmin(String)"
});
formatter.result({
  "duration": 118882700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arian.gorani@test.com",
      "offset": 14
    }
  ],
  "location": "homepageSteps.iTypeEMail(String)"
});
formatter.result({
  "duration": 89417100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "+1999999",
      "offset": 18
    }
  ],
  "location": "homepageSteps.iTypeCellPhone(String)"
});
formatter.result({
  "duration": 82702200,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.iClickSaveButton()"
});
formatter.result({
  "duration": 195707500,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.iVerifyUserHasAddedOnTable()"
});
formatter.result({
  "duration": 74890700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Add a user and validate the user has been added to the table",
  "description": "",
  "id": "add-a-user-and-validate-the-user-has-been-added-to-the-table;add-a-user-and-validate-the-user-has-been-added-to-the-table;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I open application in local Firefox Browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click Add User Button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I type First name Arian and Last name Gorani",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type User Name arian.gorani and Password arian2022",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I choose as Customer Company AAA",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select role Admin",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I type E-mail arian.gorani@test.com",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type Cell Phone +1999999",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify User has added on table",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "local",
      "offset": 22
    },
    {
      "val": "Firefox",
      "offset": 28
    }
  ],
  "location": "homepageSteps.openApplication(String,String)"
});
formatter.result({
  "duration": 7227429500,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.iClickAddUserButton()"
});
formatter.result({
  "duration": 290272400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arian",
      "offset": 18
    },
    {
      "val": "Gorani",
      "offset": 38
    }
  ],
  "location": "homepageSteps.iTypeFirstNameAndLastName(String,String)"
});
formatter.result({
  "duration": 79631500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arian.gorani",
      "offset": 17
    },
    {
      "val": "arian2022",
      "offset": 43
    }
  ],
  "location": "homepageSteps.iTypeUserNameAndPassword(String,String)"
});
formatter.result({
  "duration": 93186900,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.iChooseAsCustomerCompanyAAA()"
});
formatter.result({
  "duration": 239443000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 14
    }
  ],
  "location": "homepageSteps.iSelectRoleAdmin(String)"
});
formatter.result({
  "duration": 398346300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arian.gorani@test.com",
      "offset": 14
    }
  ],
  "location": "homepageSteps.iTypeEMail(String)"
});
formatter.result({
  "duration": 86195200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "+1999999",
      "offset": 18
    }
  ],
  "location": "homepageSteps.iTypeCellPhone(String)"
});
formatter.result({
  "duration": 73143200,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.iClickSaveButton()"
});
formatter.result({
  "duration": 251213800,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.iVerifyUserHasAddedOnTable()"
});
formatter.result({
  "duration": 1063448800,
  "status": "passed"
});
formatter.uri("deleteUser.feature");
formatter.feature({
  "line": 2,
  "name": "Delete user User Name: novak and validate user has been deleted",
  "description": "",
  "id": "delete-user-user-name:-novak-and-validate-user-has-been-deleted",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "# If you change variable \u003clocal\u003e to \u003csaucelab\u003e the test scenario will run in Sauce Lab instead on local machine,"
    },
    {
      "line": 5,
      "value": "# but you have to provide \u003cDriver Creation\u003e link of your Sauce Lab account"
    }
  ],
  "line": 8,
  "name": "Delete user User Name: novak and validate user has been deleted",
  "description": "",
  "id": "delete-user-user-name:-novak-and-validate-user-has-been-deleted;delete-user-user-name:-novak-and-validate-user-has-been-deleted",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I open application in local \u003cBrowser\u003e Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I search for User Name novak and delete it",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify User has been deleted",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "delete-user-user-name:-novak-and-validate-user-has-been-deleted;delete-user-user-name:-novak-and-validate-user-has-been-deleted;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 16,
      "id": "delete-user-user-name:-novak-and-validate-user-has-been-deleted;delete-user-user-name:-novak-and-validate-user-has-been-deleted;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 17,
      "id": "delete-user-user-name:-novak-and-validate-user-has-been-deleted;delete-user-user-name:-novak-and-validate-user-has-been-deleted;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 18,
      "id": "delete-user-user-name:-novak-and-validate-user-has-been-deleted;delete-user-user-name:-novak-and-validate-user-has-been-deleted;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Delete user User Name: novak and validate user has been deleted",
  "description": "",
  "id": "delete-user-user-name:-novak-and-validate-user-has-been-deleted;delete-user-user-name:-novak-and-validate-user-has-been-deleted;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I open application in local Chrome Browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I search for User Name novak and delete it",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify User has been deleted",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "local",
      "offset": 22
    },
    {
      "val": "Chrome",
      "offset": 28
    }
  ],
  "location": "homepageSteps.openApplication(String,String)"
});
formatter.result({
  "duration": 3056090199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "novak",
      "offset": 23
    }
  ],
  "location": "homepageSteps.deleteUserName(String)"
});
formatter.result({
  "duration": 171583200,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.iVerifyUserHasBeenDeleted()"
});
formatter.result({
  "duration": 92686501,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Delete user User Name: novak and validate user has been deleted",
  "description": "",
  "id": "delete-user-user-name:-novak-and-validate-user-has-been-deleted;delete-user-user-name:-novak-and-validate-user-has-been-deleted;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I open application in local Firefox Browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I search for User Name novak and delete it",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify User has been deleted",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "local",
      "offset": 22
    },
    {
      "val": "Firefox",
      "offset": 28
    }
  ],
  "location": "homepageSteps.openApplication(String,String)"
});
formatter.result({
  "duration": 5255691600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "novak",
      "offset": 23
    }
  ],
  "location": "homepageSteps.deleteUserName(String)"
});
formatter.result({
  "duration": 521154101,
  "status": "passed"
});
formatter.match({
  "location": "homepageSteps.iVerifyUserHasBeenDeleted()"
});
formatter.result({
  "duration": 1200395200,
  "status": "passed"
});
});