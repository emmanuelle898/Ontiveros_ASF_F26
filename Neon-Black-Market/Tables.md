REVIEWS
Column	Data Type	Key or Purpose
review_id	SERIAL	Primary key
username	VARCHAR(50)	Foreign key to ACCOUNT_ISSUE.username
rating	SMALLINT	Rating from 1 through 5
review_timestamp	TIMESTAMP	Date and time of the review
transaction_id	BIGINT	Foreign key to PURCHASE_HISTORY.transaction_id; may be empty if the purchase is not verified
TRANSACTION_ISSUES
Column	Data Type	Key or Purpose
issue_id	SERIAL	Primary key
username	VARCHAR(50)	Foreign key to ACCOUNT_ISSUE.username
transaction_id	BIGINT	Transaction reference number
issue_timestamp	TIMESTAMP	Date and time the issue occurred
issue_type	VARCHAR(100)	Examples: did not go through, did not record, or product ID missing
ACCOUNT_ISSUE
Column	Data Type	Key or Purpose
username	VARCHAR(50)	Primary key
first_name	VARCHAR(50)	Account holder’s first name
last_name	VARCHAR(50)	Account holder’s last name
account_type	VARCHAR(20)	User or vendor
status	VARCHAR(20)	Active or inactive
SYNC
Column	Data Type	Key or Purpose
sync_id	SERIAL	Primary key
username	VARCHAR(50)	Foreign key to ACCOUNT_ISSUE.username
last_login	TIMESTAMP	Most recent login time
device_type	VARCHAR(30)	Computer or mobile
ip_address	VARCHAR(45)	Device IP address
PURCHASE_HISTORY
Column	Data Type	Key or Purpose
transaction_id	BIGINT	Primary key
username	VARCHAR(50)	Foreign key to ACCOUNT_ISSUE.username
purchase_timestamp	TIMESTAMP	Date and time of purchase
payment_method	VARCHAR(30)	Card, digital wallet, or peer-to-peer
return_required	BOOLEAN	Yes or no
LOGIN_ISSUES
Column	Data Type	Key or Purpose
login_issue_id	SERIAL	Primary key
username	VARCHAR(50)	Foreign key to ACCOUNT_ISSUE.username
last_login	TIMESTAMP	Most recent successful login
issue_type	VARCHAR(100)	Examples: automatic logout, cannot log in, or password not recognized
reported_at	TIMESTAMP	Date and time the issue was reported
Relationships
REVIEWS.username references ACCOUNT_ISSUE.username.

REVIEWS.transaction_id references PURCHASE_HISTORY.transaction_id.

TRANSACTION_ISSUES.username references ACCOUNT_ISSUE.username.

SYNC.username references ACCOUNT_ISSUE.username.

PURCHASE_HISTORY.username references ACCOUNT_ISSUE.username.

LOGIN_ISSUES.username references ACCOUNT_ISSUE.username.