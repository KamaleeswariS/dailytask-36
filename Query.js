//1) Find all the topics and tasks which are thought in the month of October
db.topics.find({"topic_date": {"$gte": new ISODate("2021-10-01"),"$lt": new ISODate("2021-11-01")}}).pretty()
  
// 2)Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
 db.company.find({"drive-date":{"$gte":new Date("2020-10-15"),"lte":new Date("2020-10-31")}}).pretty() 

 // 3) Find all the company drives and students who are appeared for the placement.
 db.company_drives.find({"drive_date": {"$gte": new ISODate("2021-10-01"),"$lt": new ISODate("2021-11-01")}}).pretty()
  

// 4) Find the number of problems solved by the user in codekata
db.codekata.find({"user-id": 1}).pretty()

// 5) Find all the mentors with who has the mentee's count more than 15
db.mentors.find({"mentees_count": { "$gt": 15 }}).pretty()


//6) Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.attendance.find({"status": "absent","date": {"$gte": new ISODate("2020-10-15"),"$lte": new ISODate("2020-10-31")}}).pretty()
  
  

  