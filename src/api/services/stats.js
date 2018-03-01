import http from '../index'
import url from '../url'

/**
 * 统计分析相关 Api
 */
class StatsService {
  /**
   * 获取任务概况
   * @param   {Number} teamId 团队id
   * @return  {Object:{all, done, expired}}
   */
  getSummary(teamId) {
    return http.get(url.stats_summary, {
      teamId
    })
  }

  /**
   * 获取每日任务趋势
   * @param   {Number} teamId 团队id
   * @param   {Number} start  开始时间
   * @param   {Number} end    截至时间
   * @return  {Object:{create[], done[]}
   */
  getTrend(teamId, start, end) {
    return http.get(url.stats_trend, {
      teamId,
      start,
      end
    })
  }
}

export default new StatsService()