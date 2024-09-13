import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/harry_quiz/', // 이 부분을 프로젝트에 맞게 설정
  build: {
    outDir: 'build', // 빌드 폴더 이름이 'build'로 설정되어 있는지 확인
  },
})
