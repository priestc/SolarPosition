var solar=function(){function j(e){var t={};for(var n in e)t[n]=e[n];return t}function F(e){return 180/l*e}function I(e){return l/180*e}function q(t){t/=360;var n=360*(t-e(t));return n<0&&(n+=360),n}function R(t){t/=360;var n=360*(t-e(t));return n<-180?n+=360:n>180&&(n-=360),n}function U(t){t/=180;var n=180*(t-e(t));return n<0&&(n+=180),n}function z(t){var n=t-e(t);return n<0&&(n+=1),n}function W(e){var t=e;return t<-20?t+=1440:t>20&&(t-=1440),t}function X(e,t,n,r,i){return((e*i+t)*i+n)*i+r}function V(e,t,r){var i=0;for(var s=0;s<t;s++)i+=e[s][m]*n(e[s][g]+e[s][y]*r);return i}function $(e,t,n){var r=0;for(var s=0;s<t;s++)r+=e[s]*i(n,s);return r/=1e8,r}function J(e){var t=[];for(var n=0;n<h;n++)t[n]=V(L_TERMS[n],P[n],e);return q(F($(t,h,e)))}function K(e){var t=[];for(var n=0;n<p;n++)t[n]=V(B_TERMS[n],H[n],e);return F($(t,p,e))}function Q(e){var t=[];for(var n=0;n<d;n++)t[n]=V(R_TERMS[n],B[n],e);return $(t,d,e)}function G(e){var t=e+180;return t>=360&&(t-=360),t}function Y(e){return-e}function Z(e){return X(1/189474,-0.0019142,445267.11148,297.85036,e)}function et(e){return X(-1/3e5,-0.0001603,35999.05034,357.52772,e)}function tt(e){return X(1/56250,.0086972,477198.867398,134.96298,e)}function nt(e){return X(1/327270,-0.0036825,483202.017538,93.27191,e)}function rt(e){return X(1/45e4,.0020708,-1934.136261,125.04452,e)}function it(e,t){var n=0;for(var r=0;r<D;r++)n+=t[r]*Y_TERMS[e][r];return n}function st(e,t){var i,s=0,o=0;for(var u=0;u<v;u++)i=I(it(u,t)),s+=(PE_TERMS[u][N]+e*PE_TERMS[u][C])*r(i),o+=(PE_TERMS[u][k]+e*PE_TERMS[u][L])*n(i);return{psi:s/36e6,epsilon:o/36e6}}function ot(e){var t=e/10;return 84381.448+t*(-4680.96+t*(-1.55+t*(1999.25+t*(-51.38+t*(-249.67+t*(-39.05+t*(7.12+t*(27.87+t*(5.79+t*2.45)))))))))}function ut(e,t){return e+t/3600}function at(e){return-20.4898/(3600*e)}function ft(e,t,n){return e+t+n}function lt(e,t){return q(280.46061837+360.98564736629*(e.valueOf()-2451545)+t*t*(387933e-9-t/3871e4))}function ct(e,t,r){return e+t*n(I(r))}function ht(e,t,i){var s=I(e),a=I(t);return q(F(o(r(s)*n(a)-u(I(i))*r(a),n(s))))}function pt(e,t,i){var s=I(e),o=I(t);return F(f(r(s)*n(o)+n(s)*r(o)*r(I(i))))}function dt(e,t,n){return e+t-n}function vt(e){return 8.794/(3600*e)}function mt(e,t,i,s,f){var l=I(e),c=I(i),h=I(s),p=I(f),d=a(.99664719*u(l)),v=.99664717*r(d)+t*r(l)/6378140,m=n(d)+t*n(l)/6378140,g=F(o(-m*r(c)*r(h),n(p)-m*r(c)*n(h)));return{alpha:g,prime:F(o((r(p)-v*r(c))*n(g),n(p)-m*r(c)*n(h)))}}function gt(e,t){return e+t}function yt(e,t){return e-t}function bt(e,t,i){var s=I(e),o=I(t);return F(f(r(s)*r(o)+n(s)*n(o)*n(I(i))))}function wt(e,t,n){return e/1010*(283/(273+t))*1.02/(60*u(I(n+10.3/(n+5.11))))}function Et(e,t){return e+t}function St(e){return 90-e}function xt(e,t,i){var s=I(e),a=I(t);return F(o(r(s),n(s)*r(a)-u(I(i))*n(a)))}function Tt(e){return e+180}function Nt(e,t,i,o){var u=I(e),a=I(o),f=n(u)*n(a)+r(a)*r(u)*n(I(t-i));return console.log("sia",f,s(f)),F(s(f))}function Ct(e){return q(280.4664567+e*(360007.6982779+e*(.03032028+e*(1/49931+e*(-1/15300+e*-5e-7)))))}function kt(e,t,r,i){return W(4*(e-.0057183-t+r*n(I(i))))}function Lt(e,t,n){return(e-t-n)/360}function At(e,i,o){var u=I(e),a=I(i),f=(r(I(o))-r(u)*r(a))/(n(u)*n(a));return t(f)<=1?U(F(s(f))):-99999}function Ot(e,t){var n=t/360;e[O]=z(e[A]-n),e[M]=z(e[A]+n),e[A]=z(e[A])}function Mt(e,n){var r=e[1]-e[0],i=e[2]-e[1];return t(r)>=2&&(r=z(r)),t(i)>=2&&(i=z(i)),e[1]+n*(r+i+(i-r)*n)/2}function _t(e,t,i){var s=I(e),o=I(t);return F(f(r(s)*r(o)+n(s)*n(o)*n(I(i))))}function Dt(e,t,i,s,o,u,a){return e[a]+(t[a]-u)/(360*n(I(i[a]))*n(I(s))*r(I(o[a])))}function Pt(e){var t={},n=[],r=e.jd;t.jc=r.century(),t.jde=r.ephemerisDay(e.delta_t),t.jce=r.ephemerisCentury(e.delta_t),t.jme=r.ephemerisMillennium(e.delta_t),t.l=J(t.jme),t.b=K(t.jme),t.r=Q(t.jme),t.theta=G(t.l),t.beta=Y(t.b),n[b]=t.x0=Z(t.jce),n[w]=t.x1=et(t.jce),n[E]=t.x2=tt(t.jce),n[S]=t.x3=nt(t.jce),n[x]=t.x4=rt(t.jce);var i=st(t.jce,n);t.del_psi=i.psi,t.del_epsilon=i.epsilon,t.epsilon0=ot(t.jme),t.epsilon=ut(t.del_epsilon,t.epsilon0),t.del_tau=at(t.r),t.lamda=ft(t.theta,t.del_psi,t.del_tau),t.nu0=lt(r,t.jc),t.nu=ct(t.nu0,t.del_psi,t.epsilon),t.alpha=ht(t.lamda,t.epsilon,t.beta),t.delta=pt(t.beta,t.epsilon,t.lamda);var s=Ct(t.jme);return t.eot=kt(s,t.alpha,t.del_psi,t.epsilon),t}function Ht(e){if(!e.jd)throw new Error("No date present.");if(e.pressure<0||e.pressure>5e3)throw new Error("Pressure "+e.pressure+" outside range (0 to 5000).");if(e.temperature<=-273||e.temperature>6e3)throw new Error("Temperature "+e.temperature+" outside range (-273 to 6000).");if(e.hour==24&&e.minute>0)throw new Error("Minute is in the next day.");if(e.hour==24&&e.second>0)throw new Error("Second is in the next day.");if(t(e.delta_t)>8e3)throw new Error("Delta T "+e.delta_t+" is larger than 8000.");if(t(e.timezone)>12)throw new Erorr("Timezone "+e.timezone+" is larger than 12.");if(t(e.longitude)>180)throw new Error("Longitude "+e.longitude+" is larger than 180.");if(t(e.latitude)>90)throw new Error("Latitude "+e.latitude+" is larger than 90.");if(e.elevation<-65e5)throw new Error("Elevation "+e.elevation+" is less than -6500000.");if(t(e.slope)>360)throw new Error("Slope "+e.slope+" is larger than 360.");if(t(e.azm_rotation)>360)throw new Error("Azm Rotation "+e.azm_rotation+" is larger than 360.");if(t(e.atmos_refract)>10)throw new Error("Atospheric refraction "+e.atmos_refract+" is larger than 10.");return!0}function Bt(e){Ht(e);var t={},n=[],r=[],i=[],s=[],o=[],u=[],a=[],f=[],l=-1*(c+e.atmos_refract),h=j(e);h.jd=e.jd.startOfJulianDay();var p=Pt(h),d=p.nu;h.delta_t=0,h.jd=h.jd.add(-1);for(var v=0;v<3;v++){var m=Pt(h);n[v]=m.alpha,r[v]=m.delta,h.jd=h.jd.add(1)}i[A]=Lt(n[1],e.longitude,d);var g=At(e.latitude,r[1],l);if(g>=0){Ot(i,g);for(v=0;v<_;v++){s[v]=d+360.985647*i[v];var y=i[v]+e.delta_t/86400;u[v]=Mt(n,y),a[v]=Mt(r,y),f[v]=R(s[v]+e.longitude-u[v]),o[v]=_t(e.latitude,a[v],f[v])}t.suntransitHourAngle=o[A],t.sunriseHourAngle=f[O],t.sunsetHourAngle=f[M],t.transitUTC=new qt(i[A]-f[A]/360),t.riseUTC=new qt(Dt(i,o,a,e.latitude,f,l,O)),t.setUTC=new qt(Dt(i,o,a,e.latitude,f,l,M)),t.transitLocal=t.transitUTC.addHours(e.timezone||0),t.riseLocal=t.riseUTC.addHours(e.timezone||0),t.setLocal=t.setUTC.addHours(e.timezone||0),t.suntransitLocalHr=t.transitLocal.toHours(),t.sunriseLocalHr=t.riseLocal.toHours(),t.sunsetLocalHr=t.setLocal.toHours(),t.suntransitLocalStr=t.transitLocal.toString(),t.sunriseLocalStr=t.riseLocal.toString(),t.sunsetLocalStr=t.setLocal.toString()}else t.srha=t.ssha=t.sta=t.suntransit=t.sunrise=t.sunset=-99999;return t}function jt(e){Ht(e);var t=Pt(e),n={};n.h=dt(t.nu,e.longitude,t.alpha),n.xi=vt(t.r);var r=mt(e.latitude,e.elevation,n.xi,n.h,t.delta);return n.del_alpha=r.alpha,n.delta_prime=r.prime,n.alpha_prime=gt(t.alpha,n.del_alpha),n.h_prime=yt(n.h,n.del_alpha),n.e0=bt(e.latitude,e.delta_prime,n.h_prime),n.del_e=wt(e.pressure,e.temperature,n.e0),n.e=Et(n.e0,n.del_e),n.zenith=St(n.e),n.azimuth180=xt(n.h_prime,e.latitude,e.delta_prime),n.azimuth=Tt(n.azimuth180),n.incidence=Nt(n.zenith,n.azimuth180,e.azm_rotation,e.slope),n}function Ft(e,t,n,r,i,s,o,u,a,f,l){this.jd=e||It.fromDate(),this.latitude=t||0,this.longitude=n||0,this.delta_t=r||64.797,this.timezone=i||0,this.elevation=s||1829,this.pressure=o||835,this.temperature=u||10,this.slope=a||0,this.azm_rotation=f||180,this.atmos_refract=l||.5667}function It(e){this.day=e}function qt(e){this.dayFraction=e-Math.floor(e)}function Rt(e,t){return"000".substring(3-(t-e.toString().length))+e}var e=Math.floor,t=Math.abs,n=Math.cos,r=Math.sin,i=Math.pow,s=Math.acos,o=Math.atan2,u=Math.tan,a=Math.atan,f=Math.asin,l=Math.PI,c=.26667,h=6,p=2,d=5,v=63,m=0,g=1,y=2,b=0,w=1,E=2,S=3,x=4,T=5,N=0,C=1,k=2,L=3,A=0,O=1,M=2,_=3,D=T,P=[64,34,20,7,3,1],H=[5,2],B=[40,10,6,2,1];return L_TERMS=[[[175347046,0,0],[3341656,4.6692568,6283.07585],[34894,4.6261,12566.1517],[3497,2.7441,5753.3849],[3418,2.8289,3.5231],[3136,3.6277,77713.7715],[2676,4.4181,7860.4194],[2343,6.1352,3930.2097],[1324,.7425,11506.7698],[1273,2.0371,529.691],[1199,1.1096,1577.3435],[990,5.233,5884.927],[902,2.045,26.298],[857,3.508,398.149],[780,1.179,5223.694],[753,2.533,5507.553],[505,4.583,18849.228],[492,4.205,775.523],[357,2.92,.067],[317,5.849,11790.629],[284,1.899,796.298],[271,.315,10977.079],[243,.345,5486.778],[206,4.806,2544.314],[205,1.869,5573.143],[202,2.4458,6069.777],[156,.833,213.299],[132,3.411,2942.463],[126,1.083,20.775],[115,.645,.98],[103,.636,4694.003],[102,.976,15720.839],[102,4.267,7.114],[99,6.21,2146.17],[98,.68,155.42],[86,5.98,161000.69],[85,1.3,6275.96],[85,3.67,71430.7],[80,1.81,17260.15],[79,3.04,12036.46],[71,1.76,5088.63],[74,3.5,3154.69],[74,4.68,801.82],[70,.83,9437.76],[62,3.98,8827.39],[61,1.82,7084.9],[57,2.78,6286.6],[56,4.39,14143.5],[56,3.47,6279.55],[52,.19,12139.55],[52,1.33,1748.02],[51,.28,5856.48],[49,.49,1194.45],[41,5.37,8429.24],[41,2.4,19651.05],[39,6.17,10447.39],[37,6.04,10213.29],[37,2.57,1059.38],[36,1.71,2352.87],[36,1.78,6812.77],[33,.59,17789.85],[30,.44,83996.85],[30,2.74,1349.87],[25,3.16,4690.48]],[[628331966747,0,0],[206059,2.678235,6283.07585],[4303,2.6351,12566.1517],[425,1.59,3.523],[119,5.796,26.298],[109,2.966,1577.344],[93,2.59,18849.23],[72,1.14,529.69],[68,1.87,398.15],[67,4.41,5507.55],[59,2.89,5223.69],[56,2.17,155.42],[45,.4,796.3],[36,.47,775.52],[29,2.65,7.11],[21,5.34,.98],[19,1.85,5486.78],[19,4.97,213.3],[17,2.99,6275.96],[16,.03,2544.31],[16,1.43,2146.17],[15,1.21,10977.08],[12,2.83,1748.02],[12,3.26,5088.63],[12,5.27,1194.45],[12,2.08,4694],[11,.77,553.57],[10,1.3,3286.6],[10,4.24,1349.87],[9,2.7,242.73],[9,5.64,951.72],[8,5.3,2352.87],[6,2.65,9437.76],[6,4.67,4690.48]],[[52919,0,0],[8720,1.0721,6283.0758],[309,.867,12566.152],[27,.05,3.52],[16,5.19,26.3],[16,3.68,155.42],[10,.76,18849.23],[9,2.06,77713.77],[7,.83,775.52],[5,4.66,1577.34],[4,1.03,7.11],[4,3.44,5573.14],[3,5.14,796.3],[3,6.05,5507.55],[3,1.19,242.73],[3,6.12,529.69],[3,.31,398.15],[3,2.28,553.57],[2,4.38,5223.69],[2,3.75,.98]],[[289,5.844,6283.076],[35,0,0],[17,5.49,12566.15],[3,5.2,155.42],[1,4.72,3.52],[1,5.3,18849.23],[1,5.97,242.73]],[[114,3.142,0],[8,4.13,6283.08],[1,3.84,12566.15]],[[1,3.14,0]]],B_TERMS=[[[280,3.199,84334.662],[102,5.422,5507.553],[80,3.88,5223.69],[44,3.7,2352.87],[32,4,1577.34]],[[9,3.9,5507.55],[6,1.73,5223.69]]],R_TERMS=[[[100013989,0,0],[1670700,3.0984635,6283.07585],[13956,3.05525,12566.1517],[3084,5.1985,77713.7715],[1628,1.1739,5753.3849],[1576,2.8469,7860.4194],[925,5.453,11506.77],[542,4.564,3930.21],[472,3.661,5884.927],[346,.964,5507.553],[329,5.9,5223.694],[307,.299,5573.143],[243,4.273,11790.629],[212,5.847,1577.344],[186,5.022,10977.079],[175,3.012,18849.228],[110,5.055,5486.778],[98,.89,6069.78],[86,5.69,15720.84],[86,1.27,161000.69],[85,.27,17260.15],[63,.92,529.69],[57,2.01,83996.85],[56,5.24,71430.7],[49,3.25,2544.31],[47,2.58,775.52],[45,5.54,9437.76],[43,6.01,6275.96],[39,5.36,4694],[38,2.39,8827.39],[37,.83,19651.05],[37,4.9,12139.55],[36,1.67,12036.46],[35,1.84,2942.46],[33,.24,7084.9],[32,.18,5088.63],[32,1.78,398.15],[28,1.21,6286.6],[28,1.9,6279.55],[26,4.59,10447.39]],[[103019,1.10749,6283.07585],[1721,1.0644,12566.1517],[702,3.142,0],[32,1.02,18849.23],[31,2.84,5507.55],[25,1.32,5223.69],[18,1.42,1577.34],[10,5.91,10977.08],[9,1.42,6275.96],[9,.27,5486.78]],[[4359,5.7846,6283.0758],[124,5.579,12566.152],[12,3.14,0],[9,3.63,77713.77],[6,1.87,5573.14],[3,5.47,18849]],[[145,4.273,6283.076],[7,3.92,12566.15]],[[4,2.56,6283.08]]],Y_TERMS=[[0,0,0,0,1],[-2,0,0,2,2],[0,0,0,2,2],[0,0,0,0,2],[0,1,0,0,0],[0,0,1,0,0],[-2,1,0,2,2],[0,0,0,2,1],[0,0,1,2,2],[-2,-1,0,2,2],[-2,0,1,0,0],[-2,0,0,2,1],[0,0,-1,2,2],[2,0,0,0,0],[0,0,1,0,1],[2,0,-1,2,2],[0,0,-1,0,1],[0,0,1,2,1],[-2,0,2,0,0],[0,0,-2,2,1],[2,0,0,2,2],[0,0,2,2,2],[0,0,2,0,0],[-2,0,1,2,2],[0,0,0,2,0],[-2,0,0,2,0],[0,0,-1,2,1],[0,2,0,0,0],[2,0,-1,0,1],[-2,2,0,2,2],[0,1,0,0,1],[-2,0,1,0,1],[0,-1,0,0,1],[0,0,2,-2,0],[2,0,-1,2,1],[2,0,1,2,2],[0,1,0,2,2],[-2,1,1,0,0],[0,-1,0,2,2],[2,0,0,2,1],[2,0,1,0,0],[-2,0,2,2,2],[-2,0,1,2,1],[2,0,-2,0,1],[2,0,0,0,1],[0,-1,1,0,0],[-2,-1,0,2,1],[-2,0,0,0,1],[0,0,2,2,1],[-2,0,2,0,1],[-2,1,0,2,1],[0,0,1,-2,0],[-1,0,1,0,0],[-2,1,0,0,0],[1,0,0,0,0],[0,0,1,2,0],[0,0,-2,2,2],[-1,-1,1,0,0],[0,1,1,0,0],[0,-1,1,2,2],[2,-1,-1,2,2],[0,0,3,2,2],[2,-1,0,2,2]],PE_TERMS=[[-171996,-174.2,92025,8.9],[-13187,-1.6,5736,-3.1],[-2274,-0.2,977,-0.5],[2062,.2,-895,.5],[1426,-3.4,54,-0.1],[712,.1,-7,0],[-517,1.2,224,-0.6],[-386,-0.4,200,0],[-301,0,129,-0.1],[217,-0.5,-95,.3],[-158,0,0,0],[129,.1,-70,0],[123,0,-53,0],[63,0,0,0],[63,.1,-33,0],[-59,0,26,0],[-58,-0.1,32,0],[-51,0,27,0],[48,0,0,0],[46,0,-24,0],[-38,0,16,0],[-31,0,13,0],[29,0,0,0],[29,0,-12,0],[26,0,0,0],[-22,0,0,0],[21,0,-10,0],[17,-0.1,0,0],[16,0,-8,0],[-16,.1,7,0],[-15,0,9,0],[-13,0,7,0],[-12,0,6,0],[11,0,0,0],[-10,0,5,0],[-8,0,3,0],[7,0,-3,0],[-7,0,0,0],[-7,0,3,0],[-7,0,3,0],[6,0,0,0],[6,0,-3,0],[6,0,-3,0],[-6,0,3,0],[-6,0,3,0],[5,0,0,0],[-5,0,3,0],[-5,0,3,0],[-5,0,3,0],[4,0,0,0],[4,0,0,0],[4,0,0,0],[-4,0,0,0],[-4,0,0,0],[-4,0,0,0],[3,0,0,0],[-3,0,0,0],[-3,0,0,0],[-3,0,0,0],[-3,0,0,0],[-3,0,0,0],[-3,0,0,0],[-3,0,0,0]],Ft.prototype.getSunRiseTransitSet=function(){return Bt(this)},Ft.prototype.getSunPosition=function(){return jt(this)},It.prototype.century=function(){return(this.day-2451545)/36525},It.prototype.ephemerisDay=function(e){return this.day+e/86400},It.prototype.ephemerisCentury=function(e){return(this.ephemerisDay(e)-2451545)/36525},It.prototype.ephemerisMillennium=function(e){return this.ephemerisCentury(e)/10},It.prototype.valueOf=function(){return this.day},It.prototype.toString=function(){return"JD"+this.day},It.prototype.startOfJulianDay=function(){return new It(e(this.day-.5)+.5)},It.prototype.add=function(e){return new It(this.day+e)},It.prototype.toDate=function(){var t=this.day+.5,n=e(t),r=t-n,i;if(n<2299161)i=n;else{var s=e((n-1867216.25)/36524.25);i=n+1+s-e(s/4)}var o=i+1524,u=e((o-122.1)/365.25),a=e(u*365.25),f=e((o-a)/30.6001),l=o-a-e(30.6001*f)+r,c=f<14?f-1:f-13,h=c>2?u-4716:u-4715,p=l*24*60*60*1e3;return new Date(Date.UTC(h,c-1,0,0,0,0,p))},It.fromDate=function(e){return e=e||new Date,It.fromValues(e.getFullYear(),e.getMonth()+1,e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds(),e.getTimezoneOffset()/-60)},It.fromValues=function(t,n,r,i,s,o,u,a){a=a||0,u=u||0;var f=r+(i-a+(s+(o+u/1e3)/60)/60)/24;n<3&&(n+=12,t--);var l=e(365.25*(t+4716))+e(30.6001*(n+1))+f-1524.5;if(l>2299160){var c=e(t/100);l+=2-c+e(c/4)}return new It(l)},qt.prototype.toHours=function(){return this.dayFraction*24},qt.prototype.addHours=function(e){return new qt(this.dayFraction+e/24)},qt.prototype.toString=function(){return this.toHMS().toString()},qt.prototype.toHMS=function(){var e=Math.floor,t=this.dayFraction;t*=24;var n=e(t);t-=n,t*=60;var r=e(t);t-=r,t*=60;var i=e(t);t-=i;var s=e(t*1e3);return{hour:n,minute:r,second:i,millisecond:s,toString:function(){return Rt(n,2)+":"+Rt(r,2)+":"+Rt(i,2)+"."+Rt(s,3)}}},qt.prototype.valueOf=function(){return this.dayFraction()},qt.fromValues=function(e,t,n,r){return new qt(((e||0)+((t||0)+((n||0)+(r||0)/1e3)/60)/60)/24)},qt.fromHMS=function(e){return qt.fromValues(e.hour,e.minute,e.second,e.millisecond)},qt.fromDate=function(e){return e=e||new Date,qt.fromValues(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())},{SolarPosition:Ft,JulianDay:It,Time:qt}}()