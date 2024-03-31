import{w as ln,c as K}from"./path-39bad7e2-CbwjOpE9.js";import{bJ as rn,bK as Q,bL as w,bM as un,bN as y,bb as on,bO as j,bP as _,bQ as an,bR as t,bS as sn,bT as tn,bU as fn}from"./index-CzqpegNe.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,q,O,v,R,L,r){var D=q-l,i=O-h,n=L-v,m=r-R,u=m*D-n*i;if(!(u*u<y))return u=(n*(h-R)-m*(l-v))/u,[l+u*D,h+u*i]}function H(l,h,q,O,v,R,L){var r=l-q,D=h-O,i=(L?R:-R)/j(r*r+D*D),n=i*D,m=-i*r,u=l+n,s=h+m,f=q+n,c=O+m,M=(u+f)/2,o=(s+c)/2,p=f-u,g=c-s,b=p*p+g*g,A=v-R,T=u*c-f*s,E=(g<0?-1:1)*j(fn(0,A*A*b-T*T)),I=(T*g-p*E)/b,J=(-T*p-g*E)/b,P=(T*g+p*E)/b,d=(-T*p+g*E)/b,x=I-M,e=J-o,a=P-M,N=d-o;return x*x+e*e>a*a+N*N&&(I=P,J=d),{cx:I,cy:J,x01:-n,y01:-m,x11:I*(v/A-1),y11:J*(v/A-1)}}function vn(){var l=cn,h=yn,q=K(0),O=null,v=gn,R=mn,L=pn,r=null,D=ln(i);function i(){var n,m,u=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-un,c=R.apply(this,arguments)-un,M=an(c-f),o=c>f;if(r||(r=n=D()),s<u&&(m=s,s=u,u=m),!(s>y))r.moveTo(0,0);else if(M>on-y)r.moveTo(s*Q(f),s*w(f)),r.arc(0,0,s,f,c,!o),u>y&&(r.moveTo(u*Q(c),u*w(c)),r.arc(0,0,u,c,f,o));else{var p=f,g=c,b=f,A=c,T=M,E=M,I=L.apply(this,arguments)/2,J=I>y&&(O?+O.apply(this,arguments):j(u*u+s*s)),P=_(an(s-u)/2,+q.apply(this,arguments)),d=P,x=P,e,a;if(J>y){var N=sn(J/u*w(I)),z=sn(J/s*w(I));(T-=N*2)>y?(N*=o?1:-1,b+=N,A-=N):(T=0,b=A=(f+c)/2),(E-=z*2)>y?(z*=o?1:-1,p+=z,g-=z):(E=0,p=g=(f+c)/2)}var U=s*Q(p),$=s*w(p),B=u*Q(A),C=u*w(A);if(P>y){var F=s*Q(g),G=s*w(g),V=u*Q(b),W=u*w(b),S;if(M<rn)if(S=dn(U,$,V,W,F,G,B,C)){var X=U-S[0],Y=$-S[1],Z=F-S[0],k=G-S[1],nn=1/w(tn((X*Z+Y*k)/(j(X*X+Y*Y)*j(Z*Z+k*k)))/2),en=j(S[0]*S[0]+S[1]*S[1]);d=_(P,(u-en)/(nn-1)),x=_(P,(s-en)/(nn+1))}else d=x=0}E>y?x>y?(e=H(V,W,U,$,s,x,o),a=H(F,G,B,C,s,x,o),r.moveTo(e.cx+e.x01,e.cy+e.y01),x<P?r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(a.y01,a.x01),!o):(r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(a.cy+a.y11,a.cx+a.x11),!o),r.arc(a.cx,a.cy,x,t(a.y11,a.x11),t(a.y01,a.x01),!o))):(r.moveTo(U,$),r.arc(0,0,s,p,g,!o)):r.moveTo(U,$),!(u>y)||!(T>y)?r.lineTo(B,C):d>y?(e=H(B,C,F,G,u,-d,o),a=H(U,$,V,W,u,-d,o),r.lineTo(e.cx+e.x01,e.cy+e.y01),d<P?r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(a.y01,a.x01),!o):(r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,u,t(e.cy+e.y11,e.cx+e.x11),t(a.cy+a.y11,a.cx+a.x11),o),r.arc(a.cx,a.cy,d,t(a.y11,a.x11),t(a.y01,a.x01),!o))):r.arc(0,0,u,A,b,o)}if(r.closePath(),n)return r=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +R.apply(this,arguments))/2-rn/2;return[Q(m)*n,w(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:K(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:K(+n),i):h},i.cornerRadius=function(n){return arguments.length?(q=typeof n=="function"?n:K(+n),i):q},i.padRadius=function(n){return arguments.length?(O=n==null?null:typeof n=="function"?n:K(+n),i):O},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:K(+n),i):v},i.endAngle=function(n){return arguments.length?(R=typeof n=="function"?n:K(+n),i):R},i.padAngle=function(n){return arguments.length?(L=typeof n=="function"?n:K(+n),i):L},i.context=function(n){return arguments.length?(r=n??null,i):r},i}export{vn as d};
