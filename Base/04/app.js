let canvas = document.getElementById('canvas');
let gl = canvas.getContext('webgl2');

if (!gl) {
    console.log('WebGL not supported, falling back on experimental-webgl');
    gl = canvas.getContext('experimental-webgl');
}

let vertexSource = `
    attribute vec2 aPosition;
    void main() {
        gl_Position = vec4(aPosition,0.0,1.0);
        gl_PointSize = 10.0;
    }
`;
let fragmentSource = `
    void main() {
        gl_FragColor = vec4(1.0,0.0,0.0,1.0);
    }
`;

// 创建shader
let vertexShader = gl.createShader(gl.VERTEX_SHADER);
let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

// shader绑定源代码
gl.shaderSource(vertexShader,vertexSource);
gl.shaderSource(fragmentShader,fragmentSource);


// 编译shader
gl.compileShader(vertexShader);
gl.compileShader(fragmentShader)

// 可能编译失败。。。。检查错误
// gl.getShaderParameter(vertexShader，gl.COMPILE_STATUS)

// 创建程序
let program = gl.createProgram();

// 着色器“附加”到程序
gl.attachShader(program,vertexShader);
gl.attachShader(program,fragmentShader);

// 链接程序
gl.linkProgram(program);
// 检查链接错误
// gl.getProgramParameter(program,gl.LINK_STATUS    )

// 使用程序
gl.useProgram(program);

gl.drawArrays(gl.POINTS, 0, 1);

