# Compress GLB models with gltf-transform
npm install -g @gltf-transform/cli

$models = Get-ChildItem -Path ./public/models -Filter *.glb

foreach ($model in $models) {
    gltf-transform optimize $model.FullName ./public/models/$($model.BaseName)-compressed.glb
}