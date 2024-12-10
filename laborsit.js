// CommonFunctions.metal
float3 calculateLighting(in float3 normal, in float3 lightDir, in float3 lightColor) {
    // Lighting calculation
}

// CommonStructures.metal
struct Vertex {
    float3 position [[attribute(0)]];
    float3 normal [[attribute(1)]];
};

// Constants.metal
constant float PI = 3.14159;
constant float3 AMBIENT_COLOR = float3(0.2, 0.2, 0.2);

// Shaders.metal
#include <CommonFunctions.metal>
#include <CommonStructures.metal>
#include <Constants.metal>

vertex VertexOut vertexShader(constant Vertex* vertices [[buffer(0)]], uint vid [[vertex_id]]) {
    // Vertex shader logic
}

fragment half4 fragmentShader(VertexOut interpolated [[stage_in]]) {
    // Fragment shader logic
}
