REVIWES
- This table keeps track of reviews left by users.
- Review ID – a different number for every review. This is the primary key.
- Username – the username of the person leaving the review. This connects to ACCOUNT_ISSUE.
- Rating – a number from 1 to 5.
- Time of review – when the review was left.
- Verified purchase – yes or no.
- Displayed yes or no, depending on whether the review is being shown.

TRANSACTION ISSUES
- This table keeps track of problems with transactions.
- Issue ID – a different number for every issue. This is the primary key.
- Username – the user or vendor reporting the issue. This connects to ACCOUNT_ISSUE.
  -Time of transaction – when the transaction happened.
  -Type of issue – for example, did not go through, did not record, or product ID was not assigned.
- Transaction ID – the number connected to the transaction.

ACCOUNT_ISSUE
- This table keeps track of account information and account status.
- Username – the username connected to the account. This is the primary key.
- First name – the account holder’s first name.
- Last name – the account holder’s last name.
- Account type – user or vendor.
- Status – active or inactive.
- Age of account – how long the account has existed.

SYNC
- This table keeps track of devices and login activity connected to an account.
- Sync ID – a different number for every sync record. This is the primary key.
- Username – the account being used. This connects to ACCOUNT_ISSUE.
- Last login – the last time the account logged in.
- Device type – computer or mobile.
- IP address – the IP address used for the login.

PURCHASE_HISTORY
- This table keeps track of previous purchases.
- Transaction ID – the number connected to the purchase. This is the primary key.
- Username – the person who made the purchase. This connects to ACCOUNT_ISSUE.
- Time of purchase – when the purchase happened.
- Payment method – card, digital wallet, or peer-to-peer payment.
- Address – the address connected to the purchase.
- Return required – yes or no.

LOGIN_ISSUES

- This table keeps track of problems users and vendors have while logging in or out.
- Login issue ID – a different number for every login problem. This is the primary key.
- Username – the account having the problem. This connects to ACCOUNT_ISSUE.
- Last login – the last successful login.
- Type of issue – automatic logout, cannot log in, password not recognized, username not recognized, or cannot log out.
- Recent activity – whether the account was active recently.
- Account type – user or vendor.

HOW THE TABLES CONNECT
- Username connects the account table to reviews, transaction issues, sync records, purchase history, and login issues.
- Transaction ID can connect reviews and transaction issues to purchase history.
- A primary key identifies one specific record.
- A foreign key connects information in one table to information in another table.

RELATIONSHIP
(REVIEWS table; column username) references (ACCOUNT_ISSUE table; column username)
(REVIEWS table; column transaction_id) references (PURCHASE_HISTORY table; column transaction_id)
(TRANSACTION_ISSUES table; column username) references (ACCOUNT_ISSUE table; column username)
(SYNCtable; column username) references (ACCOUNT_ISSUE table; column username)
(PURCHASE_HISTORY table; column username) references (ACCOUNT_ISSUE table; column username)
(LOGIN_ISSUES table; columnuser name) references (ACCOUNT_ISSUEtable; column username)