const nreq = require('./lib/NReq')
nreq.request('GET','http','localhost',9818,'/hi')

nreq.requesthttps('GET','https','covid19.ddc.moph.go.th',443,'/api/Cases/today-cases-all')
