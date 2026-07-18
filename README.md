# GitHub Actions Practice Pack

Bộ project nhỏ để thực hành theo tài liệu **Giáo trình CI/CD bằng GitHub Actions**.

## Chạy local

```bash
npm ci
npm test
npm run lint
npm run build
npm start
```

Ứng dụng dùng module có sẵn của Node.js, không cần framework. Mục đích là tập trung vào CI/CD.

## Thứ tự bài thực hành

1. Bật lần lượt các workflow trong `.github/workflows` bằng cách đổi đuôi `.yml.disabled` thành `.yml`.
2. Commit và push lên GitHub.
3. Quan sát tab **Actions**, đọc log và cố ý tạo lỗi để luyện debug.
4. Với workflow Docker/GHCR, bảo đảm repository cho phép `GITHUB_TOKEN` ghi package.
5. Workflow AWS là mẫu nâng cao: phải cấu hình IAM OIDC, EC2 managed node và các biến repository trước khi chạy.

> Các action dùng major version hiện hành tại thời điểm 18/07/2026. Với hệ thống production, nên pin action bên thứ ba bằng full commit SHA và dùng Dependabot để cập nhật.
