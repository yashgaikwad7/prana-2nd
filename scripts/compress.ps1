# Install gltf-transform if not already installed
npm install -g @gltf-transform/cli

# Compress GLB model
gltf-transform optimize ./public/models/ai_avatar.glb ./public/models/ai_avatar_compressed.glb
