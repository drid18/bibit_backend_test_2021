select
	u.id,
	u.username,
	nullif((select u2.username from "user" u2 where u2.id = u.parent), null) 
	as parentusername
from
	"user" u