#  PLP Page Test
Solution to the FE technical test

## Install
```bash
npm install
```

## Running
Both start on port `3000`:

### In development
```bash
npm run dev
```

### In production
```bash
# Bundle everything
npm run build

# Start
npm start
```

## Access
Visit [http://localhost:3000/category/10023](http://localhost:3000/category/10023) for the category page.

## Testing
```bash
npm test
```

## Todo
With time constraints, the current codebase is basic. As the app scales the following would become applicable:

- [x] Category product listing
- [x] Atomic design
- [x] SSR
- [ ] E2E testing (Cyprus)
- [ ] State management (Redux, MobX, Apollo)
- [ ] Themes with styled-components
- [ ] Linting
- [ ] Caching/Error handling on API responses
- [ ] Monorepo
- [ ] Better responsive tooling
- [ ] HOCs
- [ ] Accessibility