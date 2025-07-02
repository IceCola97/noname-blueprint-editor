// 定义顶级对象类型（当然是暂定喵）

interface Project {
    name: string;
    config: ProjectConfig;

}

interface ProjectConfig {
    author: string;
    description: string;
    version: string;
    dependencies: ProjectDependence[];
}

interface ProjectDependence {
    name: string;
    minVersion?: string;
    maxVersion?: string;
}

interface ContentItem {
    kind: ContentItemKind;
    symbol: string;
}

/**
 * 项目内容项类型（暂定）
 */
declare enum ContentItemKind {
    Character,
    ActiveSkill,
    PassiveSkill,
    ModifierSkill,
    CompositedSkill,
    UserFunction,
    AssetFile,
}