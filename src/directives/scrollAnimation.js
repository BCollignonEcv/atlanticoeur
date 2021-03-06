const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0.4 || entry.target.classList.contains('landing')) {
                entry.target.classList.add('scroll-enter');
                animatedScrollObserver.unobserve(entry.target);
            }
        })
    }, {
        threshold: [0.4]
    }
)

export default {
    mounted(el) {
        el.classList.add('scroll-before-enter');
        animatedScrollObserver.observe(el);
    },
}