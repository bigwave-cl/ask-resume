/*
 * @Author: AskMeWhy
 * @Date:   2020-01-15 11:24:45
 * @Last Modified by:   AskMeWhy
 * @Last Modified time: 2020-01-20 22:18:48
 */
import { merge, ObserverClass, ObserverEvent } from '@/utils';
import * as d3 from 'd3';
export class SvgBox extends ObserverClass {
    constructor(params) {
        super(params);
        merge(true, this, {
            $el: null, // 容器el
            svg: null, // canvas容器el
            chartGroup: null, // canvas容器el
            realW: null, // 容器宽度
            realH: null, // 容器高度
            resizeEvent: null,
            parOrigin: {}
        });
        this.buildParam(params);
        this.init();
        return {
            destroy: this.destroy.bind(this),
            recovery: this.recovery.bind(this)
        };
    }
    init() {
        this.recovery();
        this.emit('init');
    }
    resize() {
        this.renderSvg();
        this.renderTriangle();
    }

    destroy() {
        this.context.clearRect(0, 0, this.realW, this.realH);
        this.canvas.remove && this.canvas.remove();
        this.resizeEvent.destroy();
        this.emit('destroy');
    }

    recovery() {
        this.resize();
        this.emit('recovery');
        this.resizeEvent = new ObserverEvent(window, 'resize', (e) => {
            this.resize();
            this.emit('resize');
        });
    }

    // 构建参数
    buildParam(params) {
        let option = {
            el: null
        };

        option = merge(true, option, params);

        merge(true, this, {
            $el: option.el
        });
    }

    renderSvg() {
        let _w = this.$el.clientWidth;
        let _h = this.$el.clientHeight;
        this.realW = _w;
        this.realH = _h;

        this.svg = d3.select(this.$el)
            .select('svg')
            .attr('width', _w)
            .attr('height', _h);
        this.svg.selectAll('g.chart-source-group').remove();
        this.chartGroup = this.svg.append('g')
            .attr('class', 'chart-source-group');
    };

    renderTriangle() {
        this.calcLocation();
        // 上
        this.drawTriangle({
            l1: this.parOrigin.l1,
            l2: this.parOrigin.l2,
            l3: this.parOrigin.l3,
            color: '#4056A4',
            tab: 'Personal'
        });
        // 左
        this.drawTriangle({
            l1: this.parOrigin.l1,
            l2: this.parOrigin.l2,
            l3: this.parOrigin.l4,
            color: '#73C145',
            tab: 'Work'
        });
        // 下
        this.drawTriangle({
            l1: this.parOrigin.l4,
            l2: this.parOrigin.l2,
            l3: this.parOrigin.l5,
            color: '#69CAC6',
            tab: 'More'
        });
        // 右
        this.drawTriangle({
            l1: this.parOrigin.l2,
            l2: this.parOrigin.l3,
            l3: this.parOrigin.l5,
            color: '#F38625',
            tab: 'Project'
        });
    }
    drawTriangle(or = null) {
        /*  三角形参数
        or = {
            l1: [0,0],
            l2: [0,0],
            l3: [0,0],
            color: '#000'
        } */
        if (or === null) return;
        let _self = this;
        this.chartGroup.append('path')
            .attr('fill', or.color)
            .classed('triangle', true)
            .classed(or.tab.toLowerCase(), true)
            .attr('d', function(d) {
                return `M${or.l1[0]} ${or.l1[1]} L${or.l2[0]} ${or.l2[1]} L${or.l3[0]} ${or.l3[1]}Z`;
            })
            .on('mouseenter', function(d, i) {
                this.parentNode.appendChild(this);

                d3.select(this).classed('node-hover', true)
                    .attr('transform', 'scale(1)')
                    .transition()
                    .ease(d3.easeLinear)
                    .duration(500)
                    .attr('transform', 'scale(1.2)');
                _self.emit('hoverIn');
            })
            .on('mouseleave', function(d, i) {
                d3.select(this).classed('node-hover', false)
                    .attr('transform', 'scale(1.2)')
                    .transition()
                    .ease(d3.easeLinear)
                    .duration(0)
                    .attr('transform', 'scale(1)');
                _self.emit('hoverOut');
            })
            .on('click', function(d, i, e, t, y) {
                _self.emit('click', or);
            });
    }
    calcLocation() {
        let xAll = this.realW / 2;
        let yAll = this.realH / 2;
        this.parOrigin = {
            l1: [0, 0],
            l2: [xAll, yAll],
            l3: [this.realW, 0],
            l4: [0, this.realH],
            l5: [this.realW, this.realH]
        };
    }
}
