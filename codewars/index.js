let A = [[12,0,2,0,2], 
[0,8,0,-2,0], 
[2,0,6,0,-2], 
[0,-2,0,4,0], 
[2,0,-2,0,5]]; 
let x = [2,5,0,1,3]; 
const n = 5; 
let res = []; 
for(let a of A){ 
let s = 0; 
for(let i = 0;i<n;++i){ 
s+=a[i]*x[i]; 
} 
res.push(s); 
} 
for(let i = 0;i<n;++i){ 
A[i].push(res[i]); 
} 
for(let k = 1;k<n;++k){ 
for(let j = k;j<n;++j){ 
let m = A[j][k-1]/A[k-1][k-1]; 
for(let i = 0;i<n+1;++i){ 
A[j][i]=(A[j][i]-m*A[k-1][i]); 
} 
} 
} 
let y = []; 
for(let i = n-1;i>=0;--i){ 
y[i]=A[i][n]/A[i][i]; 
for(let c = n-1;c>i;--c){ 
y[i] = y[i] - A[i][c]*y[c]/A[i][i]; 
} 
} 
for(let i = n-1;i>=0;--i){ 
y[i]=A[i][n]/A[i][i]; 
for(let c = n-1;c>i;--c){ 
y[i] = y[i] - A[i][c]*y[c]/A[i][i]; 
} 
} 
for(let i = n-1;i>=0;--i){ 
x[i]=x[i].toFixed(16); 

} 
for(let i = n-1;i>=0;--i){ 
y[i]=y[i].toFixed(16); 

} 
console.log(x); 
console.log(y);
