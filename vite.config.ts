import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // 빌드 폴더 이름이 'build'로 설정되어 있는지 확인
  },
})
