# Contributing to AI Wedding Planner

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## 🤝 How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in Issues
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (OS, browser, Node version)

### Suggesting Features

1. Check if the feature has been suggested
2. Create a new issue with:
   - Clear description of the feature
   - Use cases and benefits
   - Potential implementation approach

### Code Contributions

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly
5. Commit with clear messages
6. Push to your fork
7. Open a Pull Request

## 📝 Code Style Guidelines

### JavaScript/JSX

- Use ES6+ features
- Use functional components with hooks
- Follow Airbnb style guide
- Use meaningful variable names
- Add comments for complex logic

```javascript
// Good
const fetchUserData = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// Bad
const f = (u) => api.get('/users/' + u);
```

### React Components

- One component per file
- Use PropTypes or TypeScript for type checking
- Keep components small and focused
- Extract reusable logic into hooks

```jsx
// Good
const UserCard = ({ user, onEdit }) => {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <button onClick={() => onEdit(user.id)}>Edit</button>
    </div>
  );
};

// Bad - too much in one component
const UserCardWithEverything = () => {
  // Lots of state and logic
  // Multiple responsibilities
};
```

### CSS/Tailwind

- Use Tailwind utility classes
- Create custom classes in index.css for reusable patterns
- Keep components responsive
- Use consistent spacing

```jsx
// Good
<button className="btn-primary flex items-center space-x-2">
  <Icon />
  <span>Click Me</span>
</button>

// Avoid inline styles
<button style={{ color: 'blue', padding: '10px' }}>
  Click Me
</button>
```

### Backend Code

- Use async/await for asynchronous operations
- Implement proper error handling
- Validate input data
- Use meaningful route names
- Add JSDoc comments

```javascript
/**
 * Generate AI budget recommendations
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const generateBudget = async (req, res) => {
  try {
    const { totalBudget } = req.body;
    
    if (!totalBudget) {
      return res.status(400).json({ error: 'Total budget is required' });
    }
    
    // Implementation
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
```

## 🧪 Testing

### Before Submitting PR

- [ ] Test all functionality manually
- [ ] Check console for errors
- [ ] Test on different screen sizes
- [ ] Verify API endpoints work
- [ ] Check for broken links
- [ ] Test error handling
- [ ] Verify environment variables work

### Testing Checklist

Frontend:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms validate properly
- [ ] Authentication flows work
- [ ] API calls succeed
- [ ] Error states display correctly

Backend:
- [ ] API endpoints return correct data
- [ ] Error handling works
- [ ] Database operations succeed
- [ ] Authentication validates correctly
- [ ] Rate limiting functions

## 📦 Pull Request Process

1. **Update Documentation**
   - Update README if needed
   - Add comments to complex code
   - Update API documentation

2. **Follow Commit Conventions**
   ```
   feat: Add new feature
   fix: Fix bug
   docs: Update documentation
   style: Format code
   refactor: Refactor code
   test: Add tests
   chore: Update dependencies
   ```

3. **PR Description Template**
   ```markdown
   ## Description
   Brief description of changes
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update
   
   ## Testing
   - [ ] Tested locally
   - [ ] Tested on multiple browsers
   - [ ] Tested responsive design
   
   ## Screenshots (if applicable)
   
   ## Checklist
   - [ ] Code follows style guidelines
   - [ ] Self-reviewed code
   - [ ] Commented complex code
   - [ ] Updated documentation
   - [ ] No console errors
   ```

4. **Review Process**
   - Maintainers will review your PR
   - Address feedback and comments
   - Make requested changes
   - PR will be merged once approved

## 🎯 Areas to Contribute

### Frontend
- New page components
- UI/UX improvements
- Accessibility enhancements
- Mobile optimization
- Animation effects
- Form validations

### Backend
- New API endpoints
- Database optimizations
- Security improvements
- API documentation
- Error handling
- Performance optimization

### AI Features
- Improved prompts
- New AI capabilities
- Better response parsing
- Context handling
- Error recovery

### Documentation
- Code examples
- Setup guides
- API documentation
- Video tutorials
- Troubleshooting guides

## 🛠️ Development Setup

1. Fork and clone the repository
2. Follow SETUP_GUIDE.md for installation
3. Create a feature branch
4. Make changes
5. Test thoroughly
6. Submit PR

## 📋 Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature request
- `documentation` - Documentation improvements
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `question` - Further information requested

## 💬 Communication

- Be respectful and constructive
- Ask questions if unclear
- Provide context in discussions
- Help others when possible

## 🎉 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

## 📜 Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone.

### Our Standards

**Positive behavior:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community

**Unacceptable behavior:**
- Trolling, insulting/derogatory comments
- Public or private harassment
- Publishing others' private information
- Other unprofessional conduct

## ❓ Questions?

- Open an issue with your question
- Check existing issues and documentation
- Reach out to maintainers

## 📝 License

By contributing, you agree that your contributions will be licensed under the ISC License.

---

Thank you for contributing to AI Wedding Planner! 🎊
