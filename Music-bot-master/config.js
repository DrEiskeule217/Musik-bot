module.exports = {
    app: {
        px: '?',
        token: 'ODk5MzI5MTAyODk5NzIwMjAz.YWxLfg.zXkQxL6_vcpytqGLjjPxYQLotnw',
        playing: 'by Eiskeule'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
